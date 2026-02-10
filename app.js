// Main JavaScript for AWS MCQ Website

let currentSet = 1;
let userAnswers = {};
let currentQuestions = [];

// Get set number from URL
function getSetFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('set')) || 1;
}

// Navigate to home page
function goHome() {
    window.location.href = 'index.html';
}

// Initialize set page
if (window.location.pathname.includes('set.html')) {
    currentSet = getSetFromURL();
    
    // Validate set number
    if (currentSet < 1 || currentSet > 20) {
        currentSet = 1;
    }
    
    // Update page title
    document.getElementById('setTitle').textContent = `Set ${currentSet}`;
    document.title = `AWS Practice - Set ${currentSet}`;
    
    // Load questions for this set
    currentQuestions = questionSets[currentSet] || [];
}

// Start the test
function startTest() {
    // Reset user answers
    userAnswers = {};
    
    // Hide pre-test view
    document.getElementById('preTestView').style.display = 'none';
    
    // Show test view
    document.getElementById('testView').style.display = 'block';
    
    // Load all questions
    loadQuestions();
    
    // Update progress
    updateProgress();
}

// Load all questions
function loadQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.id = `question-${index}`;
        
        // Check if question requires multiple selections and extract the number
        let maxSelections = 1;
        const multiSelectMatch = q.question.match(/choose\s+(two|three|2|3|four|4)/i) || 
                                 q.question.match(/select\s+(two|three|2|3|four|4)/i);
        
        if (multiSelectMatch) {
            const num = multiSelectMatch[1].toLowerCase();
            if (num === 'two' || num === '2') maxSelections = 2;
            else if (num === 'three' || num === '3') maxSelections = 3;
            else if (num === 'four' || num === '4') maxSelections = 4;
        }
        
        const isMultiSelect = maxSelections > 1;
        const inputType = isMultiSelect ? 'checkbox' : 'radio';
        
        let optionsHTML = '';
        q.options.forEach((option, optIndex) => {
            optionsHTML += `
                <div class="option" onclick="selectOption(${index}, ${optIndex}, ${isMultiSelect}, ${maxSelections})">
                    <input type="${inputType}" 
                           name="question-${index}" 
                           id="q${index}-opt${optIndex}" 
                           value="${optIndex}">
                    <label for="q${index}-opt${optIndex}">${option}</label>
                </div>
            `;
        });
        
        questionDiv.innerHTML = `
            <div class="question-header">
                <strong>Question ${index + 1}:</strong> ${q.question}
            </div>
            <div class="options">
                ${optionsHTML}
            </div>
        `;
        
        container.appendChild(questionDiv);
    });
}

// Select an option
function selectOption(questionIndex, optionIndex, isMultiSelect, maxSelections) {
    const questionDiv = document.getElementById(`question-${questionIndex}`);
    const input = document.getElementById(`q${questionIndex}-opt${optionIndex}`);
    const options = questionDiv.querySelectorAll('.option');
    
    if (isMultiSelect) {
        // For multi-select questions (checkboxes)
        const currentlyChecked = questionDiv.querySelectorAll('input[type="checkbox"]:checked');
        
        // If trying to check and already at max, prevent it
        if (!input.checked && currentlyChecked.length >= maxSelections) {
            // Uncheck the first selected option to allow new selection
            const firstChecked = currentlyChecked[0];
            firstChecked.checked = false;
            const firstIndex = parseInt(firstChecked.value);
            options[firstIndex].classList.remove('selected');
        }
        
        input.checked = !input.checked;
        
        // Update selected class
        if (input.checked) {
            options[optionIndex].classList.add('selected');
        } else {
            options[optionIndex].classList.remove('selected');
        }
        
        // Save all selected answers as an array
        const selectedOptions = [];
        questionDiv.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            selectedOptions.push(parseInt(checkbox.value));
        });
        
        if (selectedOptions.length > 0) {
            userAnswers[questionIndex] = selectedOptions;
        } else {
            delete userAnswers[questionIndex];
        }
    } else {
        // For single-select questions (radio buttons)
        userAnswers[questionIndex] = optionIndex;
        
        // Remove selected class from all options
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Add selected class to clicked option
        options[optionIndex].classList.add('selected');
        
        // Check the radio button
        input.checked = true;
    }
    
    // Update progress
    updateProgress();
}

// Update progress bar
function updateProgress() {
    const answered = Object.keys(userAnswers).length;
    const total = currentQuestions.length;
    const percentage = (answered / total) * 100;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = 
        `Answered ${answered} of ${total} questions`;
}

// Submit test
function submitTest() {
    const answered = Object.keys(userAnswers).length;
    const total = currentQuestions.length;
    
    if (answered < total) {
        const unanswered = total - answered;
        if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`)) {
            return;
        }
    }
    
    // Calculate results
    calculateResults();
    
    // Hide test view
    document.getElementById('testView').style.display = 'none';
    
    // Show result view
    document.getElementById('resultView').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Calculate and display results
function calculateResults() {
    let correct = 0;
    let wrong = 0;
    
    currentQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer !== undefined) {
            // Check if question is multi-select
            const isMultiSelect = Array.isArray(userAnswer);
            
            if (isMultiSelect) {
                // For multi-select, check if user selected the correct answer(s)
                // Note: In the current data structure, only the first correct answer is marked
                // We'll check if the correctAnswer is in the user's selections
                if (Array.isArray(userAnswer) && userAnswer.includes(q.correctAnswer)) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                // For single-select
                if (userAnswer === q.correctAnswer) {
                    correct++;
                } else {
                    wrong++;
                }
            }
        }
    });
    
    const unanswered = currentQuestions.length - (correct + wrong);
    const percentage = Math.round((correct / currentQuestions.length) * 100);
    const passed = percentage >= 70;
    
    // Update result stats
    document.getElementById('scoreValue').textContent = `${correct}/${currentQuestions.length}`;
    document.getElementById('percentageValue').textContent = `${percentage}%`;
    document.getElementById('correctValue').textContent = correct;
    document.getElementById('wrongValue').textContent = wrong;
    
    // Update result message
    const resultMessage = document.getElementById('resultMessage');
    if (passed) {
        resultMessage.className = 'result-message pass';
        resultMessage.textContent = '🎉 Congratulations! You Passed!';
        document.getElementById('resultTitle').textContent = '✅ Test Passed!';
    } else {
        resultMessage.className = 'result-message fail';
        resultMessage.textContent = '📚 Keep practicing! You can do better!';
        document.getElementById('resultTitle').textContent = '❌ Test Failed';
    }
    
    // Show detailed review
    showDetailedReview();
}

// Show detailed review of answers
function showDetailedReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '<h3>📋 Detailed Review</h3>';
    
    currentQuestions.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const isMultiSelect = Array.isArray(userAnswer);
        
        let isCorrect;
        if (isMultiSelect) {
            isCorrect = userAnswer && userAnswer.includes(q.correctAnswer);
        } else {
            isCorrect = userAnswer === q.correctAnswer;
        }
        
        const wasAnswered = userAnswer !== undefined;
        
        const reviewItem = document.createElement('div');
        reviewItem.className = 'question-item';
        
        let statusIcon = '';
        let statusClass = '';
        
        if (!wasAnswered) {
            statusIcon = '⚠️';
            statusClass = 'unanswered';
        } else if (isCorrect) {
            statusIcon = '✅';
            statusClass = 'correct';
        } else {
            statusIcon = '❌';
            statusClass = 'wrong';
        }
        
        const inputType = isMultiSelect ? 'checkbox' : 'radio';
        
        let optionsHTML = '';
        q.options.forEach((option, optIndex) => {
            let optionClass = 'option';
            
            // Mark correct answer
            if (optIndex === q.correctAnswer) {
                optionClass += ' correct';
            }
            
            // For multi-select, check if user selected this option
            const userSelected = isMultiSelect ? 
                (userAnswer && userAnswer.includes(optIndex)) : 
                (optIndex === userAnswer);
            
            // Mark user's wrong answer
            if (wasAnswered && userSelected && optIndex !== q.correctAnswer) {
                optionClass += ' wrong';
            }
            
            // Mark correct answer if user didn't select it
            if (wasAnswered && optIndex === q.correctAnswer && !isCorrect) {
                optionClass += ' not-selected-correct';
            }
            
            const checked = wasAnswered && userSelected ? 'checked' : '';
            const disabled = 'disabled';
            
            optionsHTML += `
                <div class="${optionClass}">
                    <input type="${inputType}" 
                           name="review-${index}" 
                           ${checked} 
                           ${disabled}>
                    <label>${option}</label>
                </div>
            `;
        });
        
        reviewItem.innerHTML = `
            <div class="question-header">
                ${statusIcon} <strong>Question ${index + 1}:</strong> ${q.question}
            </div>
            <div class="options">
                ${optionsHTML}
            </div>
            <div class="answer-explanation">
                <strong>Explanation:</strong> ${q.explanation}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Retake test
function retakeTest() {
    // Reset answers
    userAnswers = {};
    
    // Hide result view
    document.getElementById('resultView').style.display = 'none';
    
    // Show pre-test view
    document.getElementById('preTestView').style.display = 'flex';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('AWS MCQ Website loaded successfully!');
    console.log(`Total question sets available: ${Object.keys(questionSets).length}`);
});
