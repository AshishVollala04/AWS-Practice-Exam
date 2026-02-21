import os
import json
import numpy as np
import pandas as pd
import joblib
import streamlit as st

ARTIFACT_MODEL = "artifacts/drinkstatus_model.pkl"
ARTIFACT_LE    = "artifacts/drinkstatus_label_encoder.pkl"
BRAND_CSV      = "brand_master.csv"

st.set_page_config(page_title="Water Drinking Status (ML)", page_icon="💧", layout="centered")

# ---------- Utilities ----------
@st.cache_resource
def load_model_and_encoder(model_path=ARTIFACT_MODEL, le_path=ARTIFACT_LE):
    if not os.path.exists(model_path) or not os.path.exists(le_path):
        raise FileNotFoundError(
            f"Artifacts not found. Expected:\n- {model_path}\n- {le_path}\n"
            "Train/export your model first, or upload the files."
        )
    model = joblib.load(model_path)
    le = joblib.load(le_path)
    return model, le

@st.cache_data
def load_brand_master(path=BRAND_CSV):
    if not os.path.exists(path):
        return None
    df = pd.read_csv(path)
    # Normalize expected columns if present
    expected = ["SwitchBoards", "Faucets", "WashBasins", "WC"]
    for col in expected:
        if col not in df.columns:
            df[col] = []
    # Coerce to lists (drop NaNs)
    brands = {c: sorted(list(df[c].dropna().astype(str).unique())) for c in expected}
    return brands

def predict_drinking_status(model, le, tds: float, ph: float):
    x = np.array([[tds, ph]], dtype=float)
    y_pred = model.predict(x)[0]
    label = le.inverse_transform([y_pred])[0]
    proba = None
    if hasattr(model, "predict_proba"):
        try:
            p = model.predict_proba(x)
            # binary -> p[:,1] is prob of positive class; we don’t know mapping, so compute P(Safe) properly:
            # If classes_ are [Not Safe, Safe], index of 'Safe' is np.where(le.classes_=='Safe')[0][0]
            if hasattr(model, "classes_"):
                # for some classifiers directly
                classes = model.classes_
            else:
                # for Pipelines / tree models, we rely on the label encoder mapping
                classes = np.array([0,1])  # fallback (works with LabelEncoder mapping)
            # Map encoder indices back to string classes to locate 'Safe'
            # le.classes_ aligns with encoded indices
            if "Safe" in le.classes_ and len(p.shape) == 2 and p.shape[1] == len(le.classes_):
                safe_idx = list(le.classes_).index("Safe")
                proba = float(p[:, safe_idx])
            else:
                # fallback to positive class prob if binary
                if p.shape[1] == 2:
                    proba = float(p[:, 1])
        except Exception:
            proba = None
    return label, proba

def simple_recommendation(label: str, tds: float, ph: float):
    # Non-binding, readable guidance for UI
    if label.lower() == "safe":
        rec = "Water is acceptable for drinking."
        risk = "Low"
    else:
        reasons = []
        if tds > 500: reasons.append("high TDS")
        if ph < 6.5 or ph > 8.5: reasons.append("pH out of range")
        reason_txt = "; ".join(reasons) if reasons else "quality concerns"
        rec = f"Not suitable for drinking due to {reason_txt}. Consider treatment (RO/adjust pH) or alternate source."
        risk = "High" if (tds > 800 or ph < 6.0 or ph > 9.0) else "Medium"
    return rec, risk

# ---------- Sidebar ----------
st.sidebar.header("About")
st.sidebar.write(
    "This demo predicts **DrinkingStatus** from **TDS** and **pH** using a trained ML model. "
    "Add brands if `brand_master.csv` is present. Runs offline after install."
)
st.sidebar.markdown("---")
st.sidebar.write("**Artifacts expected:**")
st.sidebar.code(f"{ARTIFACT_MODEL}\n{ARTIFACT_LE}")

# ---------- Main ----------
st.title("💧 Drinking Status — ML Predictor")

# Load artifacts
try:
    model, le = load_model_and_encoder()
except Exception as e:
    st.error(str(e))
    st.stop()

# Optional brand master
brands = load_brand_master()

col1, col2 = st.columns(2)
with col1:
    tds = st.number_input("TDS (mg/L)", min_value=0.0, max_value=5000.0, value=250.0, step=10.0, format="%.2f")
with col2:
    ph  = st.number_input("pH", min_value=0.0, max_value=14.0, value=7.20, step=0.1, format="%.2f")

# Optional brand selectors (if CSV supplied)
if brands:
    st.subheader("Fixture Brands (optional)")
    c1, c2 = st.columns(2)
    c3, c4 = st.columns(2)
    sb = c1.selectbox("SwitchBoards", options=["(none)"] + brands["SwitchBoards"], index=0)
    fa = c2.selectbox("Faucets", options=["(none)"] + brands["Faucets"], index=0)
    wb = c3.selectbox("WashBasins", options=["(none)"] + brands["WashBasins"], index=0)
    wc = c4.selectbox("WC", options=["(none)"] + brands["WC"], index=0)
else:
    sb = fa = wb = wc = "(none)"

if st.button("Predict"):
    if not (0.0 <= ph <= 14.0):
        st.warning("pH must be between 0 and 14.")
        st.stop()
    label, proba = predict_drinking_status(model, le, tds, ph)
    rec, risk = simple_recommendation(label, tds, ph)

    st.success(f"**Predicted DrinkingStatus:** {label}")
    if proba is not None:
        # If model prob maps to 'Safe' properly, show it; else we still display.
        st.write(f"**P(Safe):** {proba*100:.1f}%")
    st.write(f"**Risk Level:** {risk}")
    st.write(f"**Recommendation:** {rec}")

    # Show a compact “analysis card”
    st.markdown("### Summary")
    st.write({
        "TDS": tds,
        "pH": ph,
        "DrinkingStatus": label,
        "RiskLevel": risk,
        "Recommendation": rec,
        "SwitchBoards": sb, "Faucets": fa, "WashBasins": wb, "WC": wc
    })

st.caption("Tip: Place `brand_master.csv` next to `artifacts/` to enable brand dropdowns.")
