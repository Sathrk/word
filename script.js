// --- DOM ELEMENTS ---
const wordContainer = document.getElementById('wordContainer');
const searchInput = document.getElementById('searchInput');
const setList = document.getElementById('setList');
const studyArea = document.getElementById('studyArea');
const testContainer = document.getElementById('testContainer');
const resultsContainer = document.getElementById('resultsContainer');

// --- TEXT-TO-SPEECH ---
const synth = window.speechSynthesis;

// --- TEST STATE VARIABLES ---
let currentTestWords = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// --- INITIALIZATION ---

/**
 * Finds all unique set numbers and generates the sidebar list items and test buttons.
 */
function initializeSidebar() {
    let sidebarHtml = '';
    const totalSets = 21;
    const wordsPerTest = 20;
    const setsPerTest = wordsPerTest / 5; // Assuming 5 words per set

    for (let i = 1; i <= totalSets; i++) {
        const wordsInSet = wordData.filter(word => word.set === i);
        const setName = i === 14 ? 'Set 14: Greetings' : `Set ${i}`;

        sidebarHtml += `
            <li class="set-item" data-set-id="${i}" onclick="filterBySet('${i}', this)">
                ${setName} (${wordsInSet.length})
            </li>
        `;
        
        // After every 4 sets (20 words), add a test button
        if (i % setsPerTest === 0 && i > 0) {
            const startSet = i - setsPerTest + 1;
            const endSet = i;
            sidebarHtml += `
                <button class="test-btn" onclick="startTest(${startSet}, ${endSet})">
                    Take Test (Sets ${startSet}-${endSet})
                </button>
            `;
        }
    }
    setList.innerHTML += sidebarHtml;
}


// --- CARD RENDERING & SPEAKING (Study Mode) ---

function createWordCard(wordObj) {
    const gujaratiPronunciationHtml = wordObj.gujaratiPronunciation
        ? `<p class="pronunciation-gujarati">(${wordObj.gujaratiPronunciation})</p>`
        : '';
    return `
        <div class="word-card" id="word-${wordObj.id}">
            <div class="word-heading">
                <h2>${wordObj.word}</h2>
                <button class="pronunciation-btn" onclick="speakWord('${wordObj.word}')" title="Play Pronunciation">🔊</button>
            </div>
            ${gujaratiPronunciationHtml}
            <p class="meaning-gujarati">In Gujarati: ${wordObj.gujaratiMeaning}</p>
            <div class="example">
                <strong>Example:</strong> ${wordObj.example}
                <p class="example-gujarati">In Gujarati: ${wordObj.exampleGujarati}</p>
            </div>
        </div>
    `;
}

function renderWords(data) {
    wordContainer.innerHTML = '';
    if (data.length === 0) {
        wordContainer.innerHTML = '<p style="text-align: center; width: 100%; font-size: 1.2em; color: #dc3545;">No words found matching your criteria. Try "All Words" or clear the search.</p>';
        return;
    }
    wordContainer.innerHTML = data.map(createWordCard).join('');
}

function speakWord(word) {
    if (synth.speaking) synth.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    synth.speak(utterance);
}

// --- FILTERING LOGIC (Study Mode) ---

function filterBySet(setId, element) {
    const allSetItems = document.querySelectorAll('.set-item');
    allSetItems.forEach(item => item.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    } else {
        document.querySelector('[data-set-id="all"]').classList.add('active');
    }
    
    searchInput.value = '';
    let filteredData = wordData;
    if (setId !== 'all') {
        filteredData = wordData.filter(wordObj => wordObj.set === parseInt(setId));
    }
    renderWords(filteredData);
}

function filterWords() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.set-item').forEach(item => item.classList.remove('active'));
    document.querySelector('[data-set-id="all"]').classList.add('active');
    
    const filteredData = wordData.filter(wordObj => 
        wordObj.word.toLowerCase().includes(searchTerm) ||
        (wordObj.gujaratiPronunciation && wordObj.gujaratiPronunciation.toLowerCase().includes(searchTerm)) ||
        wordObj.gujaratiMeaning.toLowerCase().includes(searchTerm)
    );
    renderWords(filteredData);
}

function clearSearch() {
    filterBySet('all', document.querySelector('[data-set-id="all"]'));
}

// --- TEST LOGIC ---

/**
 * Prepares and starts a test for a given range of sets.
 */
function startTest(startSet, endSet) {
    // 1. Get words for the test and shuffle them
    currentTestWords = wordData
        .filter(word => word.set >= startSet && word.set <= endSet)
        .sort(() => 0.5 - Math.random());
    
    // 2. Reset test state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    // 3. Switch views
    studyArea.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    testContainer.classList.remove('hidden');

    // 4. Display the first question
    document.getElementById('testTitle').innerText = `Test: Sets ${startSet}–${endSet}`;
    displayQuestion();
}

/**
 * Displays the current question and options.
 */
function displayQuestion() {
    const question = currentTestWords[currentQuestionIndex];
    document.getElementById('testProgress').innerText = `Question ${currentQuestionIndex + 1} of ${currentTestWords.length}`;
    document.getElementById('nextQuestionBtn').classList.add('hidden');
    document.getElementById('feedbackText').innerText = '';

    // Generate options
    const options = generateOptions(question);
    
    // Randomly decide question type: Eng -> Guj or Guj -> Eng
    const isEnglishToGujarati = Math.random() > 0.5;
    const questionText = isEnglishToGujarati 
        ? `What is the Gujarati meaning of <strong>"${question.word}"</strong>?`
        : `Which English word means <strong>"${question.gujaratiMeaning}"</strong>?`;
    
    document.getElementById('questionText').innerHTML = questionText;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const answerText = isEnglishToGujarati ? option.gujaratiMeaning : option.word;
        const correctValue = isEnglishToGujarati ? question.gujaratiMeaning : question.word;
        
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerText = answerText;
        button.onclick = () => selectAnswer(button, answerText === correctValue);
        optionsContainer.appendChild(button);
    });
}

/**
 * Generates one correct and three incorrect options, then shuffles them.
 */
function generateOptions(correctWord) {
    // 1. Get distractors from the same test set, excluding the correct word
    const distractors = currentTestWords
        .filter(word => word.id !== correctWord.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    // 2. Create the final options array and shuffle it
    const options = [correctWord, ...distractors].sort(() => 0.5 - Math.random());
    return options;
}

/**
 * Handles the user's answer selection.
 */
function selectAnswer(selectedButton, isCorrect) {
    const feedbackText = document.getElementById('feedbackText');
    const question = currentTestWords[currentQuestionIndex];

    if (isCorrect) {
        score++;
        selectedButton.classList.add('correct');
        feedbackText.innerText = "Correct! ✅";
        feedbackText.style.color = '#28a745';
    } else {
        selectedButton.classList.add('incorrect');
        feedbackText.innerText = `Incorrect. The correct answer was "${question.word} - ${question.gujaratiMeaning}"`;
        feedbackText.style.color = '#dc3545';
    }
    
    // Store answer for review
    userAnswers.push({
        question: question,
        isCorrect: isCorrect,
    });

    // Disable all options and show 'Next' button
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    document.getElementById('nextQuestionBtn').classList.remove('hidden');
}

/**
 * Moves to the next question or ends the test.
 */
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentTestWords.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

/**
 * Displays the final score and a breakdown of answers.
 */
function showResults() {
    testContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    const percentage = Math.round((score / currentTestWords.length) * 100);
    document.getElementById('finalScore').innerText = `${score} / ${currentTestWords.length} (${percentage}%)`;

    const breakdownContainer = document.getElementById('resultsBreakdown');
    breakdownContainer.innerHTML = '<h3>Answer Review:</h3>';
    
    userAnswers.forEach(answer => {
        const resultClass = answer.isCorrect ? 'correct-answer' : 'incorrect-answer';
        const icon = answer.isCorrect ? '✔' : '✖';
        breakdownContainer.innerHTML += `
            <div class="result-item ${resultClass}">
                ${icon} <strong>${answer.question.word}:</strong> ${answer.question.gujaratiMeaning}
            </div>
        `;
    });
}

/**
 * Returns the user to the main study interface.
 */
function returnToStudy() {
    resultsContainer.classList.add('hidden');
    studyArea.classList.remove('hidden');
    clearSearch(); // Reset to show all words
}

// --- EXECUTION ---

// Event listener for the search input
searchInput.addEventListener('input', filterWords);

// Initial rendering and setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    filterBySet('all', document.querySelector('[data-set-id="all"]'));
});

// Expose functions to be called from HTML
window.clearSearch = clearSearch;
window.speakWord = speakWord;
window.filterBySet = filterBySet;
window.startTest = startTest;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.returnToStudy = returnToStudy;