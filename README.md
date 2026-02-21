import os
import io
import json
import time
import numpy as np
import pandas as pd
import joblib
import streamlit as st

# ---- PDF (ReportLab) ----
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

# ------------- App Constants -------------
ARTIFACT_MODEL = "artifacts/drinkstatus_model.pkl"
ARTIFACT_LE    = "artifacts/drinkstatus_label_encoder.pkl"
BRAND_CSV      = "brand_master.csv"
LAST_JSON      = "last_inspection.json"

PAGE_TITLE = "💧 Water Inspection (ML + Offline)"
PAGE_ICON = "💧"

# ------------- Streamlit Page Setup -------------
st.set_page_config(page_title=PAGE_TITLE, page_icon=PAGE_ICON, layout="centered")

# ------------- Helpers -------------
@st.cache_resource
def load_model_and_encoder():
    if not (os.path.exists(ARTIFACT_MODEL) and os.path.exists(ARTIFACT_LE)):
        return None, None
    try:
        model = joblib.load(ARTIFACT_MODEL)
        le = joblib.load(ARTIFACT_LE)
        return model, le
    except Exception:
        return None, None

@st.cache_data
def load_brand_master(path=BRAND_CSV):
    if not os.path.exists(path):
        return None
    df = pd.read_csv(path)
    # Normalize expected columns
    expected = ["SwitchBoards", "Faucets", "WashBasins", "WC"]
    for col in expected:
        if col not in df.columns:
            df[col] = []
    brands = {c: sorted(list(df[c].dropna().astype(str).unique())) for c in expected}
    return brands

def load_last():
    if os.path.exists(LAST_JSON):
        try:
            with open(LAST_JSON, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return None
    return None

def save_last(payload: dict):
    with open(LAST_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)

def compute_ph_status(ph: float) -> str:
    # Simple, app-local rule bands (adjust if you have different policy)
    if ph < 6.5:
        return "Low"
    if ph > 8.5:
        return "High"
    return "Normal"

def compute_water_quality(tds: float) -> str:
    # Simple bands (app-local; adjust as needed)
    if tds <= 150:
        return "Good"
    elif tds <= 300:
        return "Fair"
    elif tds <= 500:
        return "Poor"
    else:
        return "Very Poor"

def compute_risk_and_reco(drink_label: str, tds: float, ph: float):
    # Coarse risk logic using both ML output and ranges
    if drink_label.lower() == "safe" and (0 <= tds <= 500) and (6.5 <= ph <= 8.5):
        return "Low", "Water is acceptable for drinking."
    # Higher risk thresholds
    high_risk = (tds > 800) or (ph < 6.0) or (ph > 9.0)
    risk = "High" if high_risk else "Medium"
    reasons = []
    if tds > 500: reasons.append("high TDS")
    if ph < 6.5 or ph > 8.5: reasons.append("pH out of range")
    reason_txt = "; ".join(reasons) if reasons else "quality concerns"
    reco = f"Not suitable for direct drinking due to {reason_txt}. Consider treatment or alternate source."
    return risk, reco

def predict_drinking_status(model, le, tds: float, ph: float):
    """
    Uses trained artifacts if present; otherwise falls back to a simple rule.
    Returns (label, proba_safe or None).
    """
    if (model is None) or (le is None):
        # Fallback rule if model not available
        safe = (0 <= tds <= 500) and (6.5 <= ph <= 8.5)
        return ("Safe" if safe else "Not Safe"), None

    x = np.array([[tds, ph]], dtype=float)
    y_pred = model.predict(x)[0]
    label = le.inverse_transform([y_pred])[0]

    proba = None
    if hasattr(model, "predict_proba"):
        try:
            proba_all = model.predict_proba(x)
            # Map to 'Safe' probability using label encoder
            if isinstance(proba_all, list):
                proba_all = proba_all[0]  # some pipelines wrap it
            if len(le.classes_) == proba_all.shape[1] and "Safe" in le.classes_:
                safe_idx = list(le.classes_).index("Safe")
                proba = float(proba_all[:, safe_idx])
            elif proba_all.shape[1] == 2:
                proba = float(proba_all[:, 1])
        except Exception:
            proba = None

    return label, proba

def make_pdf_bytes(payload: dict) -> bytes:
    """
    Build an A4 PDF with the required order:
      1) Water Analysis (TDS, pH, results, recommendation)
      2) Fixture Brands
    No inspector name or timestamp included (per requirement).
    """
    buffer = io.BytesIO()
    c = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    left = 18 * mm
    top = height - 20 * mm
    line = top

    def draw_h1(text):
        nonlocal line
        c.setFont("Helvetica-Bold", 16)
        c.drawString(left, line, text)
        line -= 10 * mm

    def draw_h2(text):
        nonlocal line
        c.setFont("Helvetica-Bold", 12)
        c.drawString(left, line, text)
        line -= 6 * mm

    def draw_kv(k, v):
        nonlocal line
        c.setFont("Helvetica", 11)
        c.drawString(left, line, f"{k}: {v}")
        line -= 6 * mm

    # Title
    draw_h1("Water Inspection Report")

    # Section 1: Water Analysis
    draw_h2("1) Water Analysis")
    draw_kv("TDS (mg/L)", payload.get("TDS"))
    draw_kv("pH", payload.get("PH"))
    draw_kv("Water Quality", payload.get("WaterQuality"))
    draw_kv("pH Status", payload.get("PHStatus"))
    draw_kv("Drinking Status", payload.get("DrinkingStatus"))
    draw_kv("Risk Level", payload.get("RiskLevel"))

    # Recommendation (wrap basic)
    c.setFont("Helvetica", 11)
    rec_text = f"Recommendation: {payload.get('Recommendation', '')}"
    # Simple wrap at ~95 chars
    max_chars = 95
    y = line
    for i in range(0, len(rec_text), max_chars):
        c.drawString(left, y, rec_text[i:i+max_chars])
        y -= 6 * mm
    line = y - 2 * mm

    # Section 2: Fixture Brands
    draw_h2("2) Fixture Brands")
    draw_kv("SwitchBoards", payload.get("SwitchBoardBrand", "-"))
    draw_kv("Faucets", payload.get("FaucetBrand", "-"))
    draw_kv("WashBasins", payload.get("WashBasinBrand", "-"))
    draw_kv("WC", payload.get("WCBrand", "-"))
    draw_kv("Other", payload.get("OtherBrand", "-"))

    c.showPage()
    c.save()
    buffer.seek(0)
    return buffer.read()

# ------------- UI -------------
st.title(PAGE_TITLE)
st.caption("Follows your specified procedure: water first → brands → A4 PDF. Last inspection auto-loads. [1](https://wipro365-my.sharepoint.com/personal/as20586910_wipro_com/Documents/Microsoft%20Copilot%20Chat%20Files/inspection_app_steps_procedure.pdf)")

# Load artifacts and brands
model, le = load_model_and_encoder()
brands = load_brand_master()

# Session state for gating
if "analyzed" not in st.session_state:
    st.session_state.analyzed = False

if "loaded_last" not in st.session_state:
    st.session_state.loaded_last = False

# Load last inspection (once per session)
if not st.session_state.loaded_last:
    last = load_last()
    st.session_state.loaded_last = True
else:
    last = None

# --------- WATER SECTION (must be first) ---------
st.header("Water Input & Analysis")

# Defaults (either from last saved or sensible defaults)
default_tds = float(last.get("TDS")) if last else 250.0
default_ph  = float(last.get("PH")) if last else 7.2

c1, c2 = st.columns(2)
with c1:
    tds = st.number_input("TDS (mg/L) *", min_value=0.0, max_value=5000.0, value=default_tds, step=10.0, format="%.2f")
with c2:
    ph = st.number_input("pH *", min_value=0.0, max_value=14.0, value=default_ph, step=0.1, format="%.2f")

if st.button("Analyze Water"):
    if ph < 0 or ph > 14:
        st.error("pH must be between 0 and 14.")
        st.stop()
    # Predict DrinkingStatus (ML or fallback)
    label, proba = predict_drinking_status(model, le, tds, ph)
    ph_status = compute_ph_status(ph)
    water_quality = compute_water_quality(tds)
    risk, reco = compute_risk_and_reco(label, tds, ph)

    st.session_state.analyzed = True
    st.session_state.analysis = {
        "TDS": round(float(tds), 2),
        "PH": round(float(ph), 2),
        "WaterQuality": water_quality,
        "PHStatus": ph_status,
        "DrinkingStatus": label,
        "RiskLevel": risk,
        "Recommendation": reco,
        "ProbaSafe": (None if proba is None else round(float(proba), 4)),
    }

# Show results (if already analyzed, including when loaded from last)
if st.session_state.analyzed:
    A = st.session_state.analysis
    st.success(f"**Drinking Status:** {A['DrinkingStatus']}")
    if A["ProbaSafe"] is not None:
        st.write(f"**P(Safe):** {A['ProbaSafe']*100:.1f}%")
    st.write(f"**Water Quality:** {A['WaterQuality']}")
    st.write(f"**pH Status:** {A['PHStatus']}")
    st.write(f"**Risk Level:** {A['RiskLevel']}")
    st.write(f"**Recommendation:** {A['Recommendation']}")

# --------- BRANDS (must follow water) ---------
st.header("Fixture Brands")
if not st.session_state.analyzed:
    st.info("Complete **Water Input & Analysis** first. Then select brands. [1](https://wipro365-my.sharepoint.com/personal/as20586910_wipro_com/Documents/Microsoft%20Copilot%20Chat%20Files/inspection_app_steps_procedure.pdf)")
    sb = fa = wb = wc = "(pending)"
else:
    if brands:
        c1, c2 = st.columns(2)
        c3, c4 = st.columns(2)
        sb = c1.selectbox("SwitchBoards", options=["(none)"] + brands["SwitchBoards"], index=0)
        fa = c2.selectbox("Faucets", options=["(none)"] + brands["Faucets"], index=0)
        wb = c3.selectbox("WashBasins", options=["(none)"] + brands["WashBasins"], index=0)
        wc = c4.selectbox("WC", options=["(none)"] + brands["WC"], index=0)
    else:
        st.warning("`brand_master.csv` not found. You can still type brands manually below.")
        sb = st.text_input("SwitchBoards", "")
        fa = st.text_input("Faucets", "")
        wb = st.text_input("WashBasins", "")
        wc = st.text_input("WC", "")

other = st.text_input("Other Brand (optional)", "")

# --------- ACTIONS ---------
st.markdown("---")
colA, colB, colC = st.columns(3)

with colA:
    if st.button("💾 Save (Last Inspection)"):
        if not st.session_state.analyzed:
            st.error("Analyze water first.")
        else:
            payload = {
                **st.session_state.analysis,
                "SwitchBoardBrand": sb,
                "FaucetBrand": fa,
                "WashBasinBrand": wb,
                "WCBrand": wc,
                "OtherBrand": other,
            }
            save_last(payload)
            st.success("Saved. Next time the app opens, this inspection loads automatically. [1](https://wipro365-my.sharepoint.com/personal/as20586910_wipro_com/Documents/Microsoft%20Copilot%20Chat%20Files/inspection_app_steps_procedure.pdf)")

with colB:
    if st.button("🧾 Generate A4 PDF"):
        if not st.session_state.analyzed:
            st.error("Analyze water first.")
        else:
            payload = {
                **st.session_state.analysis,
                "SwitchBoardBrand": sb or "-",
                "FaucetBrand": fa or "-",
                "WashBasinBrand": wb or "-",
                "WCBrand": wc or "-",
                "OtherBrand": other or "-",
            }
            pdf_bytes = make_pdf_bytes(payload)
            st.download_button(
                label="⬇️ Download Report (A4 PDF)",
                data=pdf_bytes,
                file_name="Water_Inspection_Report.pdf",
                mime="application/pdf",
            )
            st.caption("Report order: Water Analysis → Fixture Brands. No inspector name/timestamp included. [1](https://wipro365-my.sharepoint.com/personal/as20586910_wipro_com/Documents/Microsoft%20Copilot%20Chat%20Files/inspection_app_steps_procedure.pdf)")

with colC:
    if st.button("🔁 Reset"):
        for k in ["analyzed", "analysis"]:
            if k in st.session_state:
                del st.session_state[k]
        st.experimental_rerun()

# --------- Footer rules ---------
st.markdown("---")
st.caption("Rules enforced: Water first, brands later; TDS & pH mandatory. PDF is generated by the app; if edited externally, only text edits are allowed. [1](https://wipro365-my.sharepoint.com/personal/as20586910_wipro_com/Documents/Microsoft%20Copilot%20Chat%20Files/inspection_app_steps_procedure.pdf)")
