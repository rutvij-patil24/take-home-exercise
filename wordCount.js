// Hardcoded preamble text to use throughout the file
const PREAMBLE_TEXT =
  "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";

// Configuration Array of objects for checkbox elements and their associated ID/Classes
const CHECKBOX_CONFIG = [
  {
    id: "startWithT",
    countId: "countStartT",
    resultId: "resultStartT",
    highlightClass: "starts-with-t",
    wordKey: "startWithT",
  },
  {
    id: "endWithE",
    countId: "countEndE",
    resultId: "resultEndE",
    highlightClass: "ends-with-e",
    wordKey: "endWithE",
  },
  {
    id: "startTEndE",
    countId: "countStartTEndE",
    resultId: "resultStartTEndE",
    highlightClass: "starts-t-ends-e",
    wordKey: "startTEndE",
  },
];

let wordCounts = {
  startWithT: { count: 0, words: [] },
  endWithE: { count: 0, words: [] },
  startTEndE: { count: 0, words: [] },
};
let preambleElement;

function analyzeWords() {
  const text = PREAMBLE_TEXT.toLowerCase().replace(/[^a-zA-Z\s]/g, "");

  // Regex for word matching as per the criteria
  const startsWithT = text.match(/\bt\w*/g) || [];
  const endsWithE = text.match(/\w*e\b/g) || [];
  const startTEndE = text.match(/\bt\w*e\b/g) || [];

  // Store results in a global object
  wordCounts = {
    startWithT: { count: startsWithT.length, words: startsWithT },
    endWithE: { count: endsWithE.length, words: endsWithE },
    startTEndE: { count: startTEndE.length, words: startTEndE },
  };
  // console.log("Word Counts: ", wordCounts);
}

function updateDisplay() {
  resetHighlighting();

  // Loop through each checkbox
  CHECKBOX_CONFIG.forEach((config) => {
    const checkbox = document.getElementById(config.id);
    const resultElement = document.getElementById(config.resultId);
    const countElement = document.getElementById(config.countId);

    // Handling edge case - make sure all elements exist
    if (!checkbox || !resultElement || !countElement) return;

    if (checkbox.checked) {
      // Show count and highlight matching words
      countElement.textContent = wordCounts[config.wordKey].count;
      resultElement.style.display = "block";
      highlightWords(wordCounts[config.wordKey].words, config.highlightClass);
    } else {
      // Hide result when checkbox is unchecked
      resultElement.style.display = "none";
    }
  });
}

function highlightWords(wordsToHighlight, highlightClass) {
  if (!preambleElement) return;

  let currentText = preambleElement.innerHTML;

  // Wrap each matching word with a span element
  wordsToHighlight.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "gi"); // Word boundary regex check for exact matches
    currentText = currentText.replace(
      regex,
      `<span class="${highlightClass}">$&</span>`
    );
  });
  preambleElement.innerHTML = currentText;
}

// Removes all highlighting
function resetHighlighting() {
  if (preambleElement) {
    preambleElement.innerHTML = PREAMBLE_TEXT;
  }
}

// Event listeners for all checkboxes
function setupEventListeners() {
  CHECKBOX_CONFIG.forEach((config) => {
    const checkbox = document.getElementById(config.id);
    if (checkbox) {
      // Listen for checkbox state changes
      checkbox.addEventListener("change", updateDisplay);
    }
  });
}

// Initialize the application when DOM is ready
function init() {
  preambleElement = document.getElementById("preambleText");

  if (!preambleElement) {
    console.error("Preamble element not found");
    return;
  }
  
  // Perform initial word analysis and setup event listeners
  analyzeWords();
  setupEventListeners();
}

// Start the application when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", init);
