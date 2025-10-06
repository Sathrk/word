// Get necessary DOM elements
const wordContainer = document.getElementById('wordContainer');
const searchInput = document.getElementById('searchInput');
const setList = document.getElementById('setList'); 

// Text-to-Speech Setup
const synth = window.speechSynthesis;

// --- INITIALIZATION ---

/**
 * Finds all unique set numbers and generates the sidebar list items.
 */
function initializeSidebar() {
    let sidebarHtml = '';
    
    // Total number of sets is 18 (from your data structure)
    for (let i = 1; i <= 21; i++) {
        const wordsInSet = wordData.filter(word => word.set === i);
        
        // Custom name for Set 14
        const setName = i === 14 ? 'Set 14: Greetings' : `Set ${i}`;
        
        // Generate the list item HTML
        sidebarHtml += `
            <li class="set-item" data-set-id="${i}" onclick="filterBySet('${i}', this)">
                ${setName} (${wordsInSet.length})
            </li>
        `;
    }
    
    // Append the generated items to the list (after the "All Words" item)
    setList.innerHTML += sidebarHtml;
}

// --- CARD RENDERING & SPEAKING ---

/**
 * Creates the HTML for a single word card.
 */
function createWordCard(wordObj) {
    // Determine which pronunciation to display
    const gujaratiPronunciationHtml = wordObj.gujaratiPronunciation
        ? `<p class="pronunciation-gujarati">(${wordObj.gujaratiPronunciation})</p>`
        : '';

    return `
        <div class="word-card" id="word-${wordObj.id}">
            <div class="word-heading">
                <h2>${wordObj.word}</h2>
                <button class="pronunciation-btn" onclick="speakWord('${wordObj.word}')" title="Play Pronunciation">
                    🔊
                </button>
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

/**
 * Renders the word cards to the container.
 */
function renderWords(data) {
    wordContainer.innerHTML = ''; 
    if (data.length === 0) {
        wordContainer.innerHTML = '<p style="text-align: center; width: 100%; font-size: 1.2em; color: #dc3545;">No words found matching your criteria. Try "All Words" or clear the search.</p>';
        return;
    }
    const cardsHtml = data.map(createWordCard).join('');
    wordContainer.innerHTML = cardsHtml;
}

/**
 * Uses the Web Speech API (Text-to-Speech) to pronounce the English word.
 */
function speakWord(word) {
    if (synth.speaking) {
        synth.cancel(); 
    }
    
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Set language for clear English pronunciation
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity
    
    synth.speak(utterance);
}


// --- FILTERING LOGIC ---

/**
 * Filters the word data by set ID and highlights the sidebar link.
 */
function filterBySet(setId, element) {
    // 1. Highlight the active set item
    const allSetItems = document.querySelectorAll('.set-item');
    allSetItems.forEach(item => item.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    } else {
        // Fallback for initial load
        document.querySelector('[data-set-id="all"]').classList.add('active');
    }
    
    // 2. Clear search input when filtering by set
    searchInput.value = '';

    // 3. Filter the data
    let filteredData = wordData;
    
    if (setId !== 'all') {
        const setNumber = parseInt(setId);
        filteredData = wordData.filter(wordObj => wordObj.set === setNumber);
    }
    
    // 4. Render the results
    renderWords(filteredData);
}

/**
 * Filters the word data based on the search input.
 */
function filterWords() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Clear set highlight and highlight "All Words" when searching
    const allSetItems = document.querySelectorAll('.set-item');
    allSetItems.forEach(item => item.classList.remove('active'));
    document.querySelector('[data-set-id="all"]').classList.add('active');

    const filteredData = wordData.filter(wordObj => 
        // Search across English word, Gujarati pronunciation, AND Gujarati meaning
        wordObj.word.toLowerCase().includes(searchTerm) ||
        (wordObj.gujaratiPronunciation && wordObj.gujaratiPronunciation.toLowerCase().includes(searchTerm)) ||
        wordObj.gujaratiMeaning.toLowerCase().includes(searchTerm)
    );
    
    renderWords(filteredData);
}

/**
 * Clears the search input and re-renders all words, resetting the sidebar filter.
 */
function clearSearch() {
    filterBySet('all', document.querySelector('[data-set-id="all"]'));
}

// --- EXECUTION ---

// Event listener for the search input
searchInput.addEventListener('input', filterWords);

// Initial rendering and setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    
    // Initial display: show all words and activate the 'All Words' link
    filterBySet('all', document.querySelector('[data-set-id="all"]'));
});

// Expose functions globally for HTML
window.clearSearch = clearSearch;
window.speakWord = speakWord;
window.filterBySet = filterBySet;