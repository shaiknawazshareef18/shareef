const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteDisplay = document.getElementById('quote');
const messageDisplay = document.getElementById('message');
const startButton = document.getElementById('start');
const currentWordTextbox = document.getElementById('current-word');

startButton.addEventListener('click', function (e) {
	// get a quote
	const quoteIndex = Math.floor(Math.random() * quotes.length);

	// Put the quote into an array of words
	words = quotes[quoteIndex].split(' ');

	// Add spaces to everything but the last word
	for (let index = 0; index < words.length - 1; index++) {
		words[index] = words[index] + ' ';
	}

	// update the display
	// Surround the words with spans so we can set a class
	quoteDisplay.innerHTML = words
		.map(function (word) {
			return `<span>${word}</span>`;
		})
		.join('');

	// reset the word index for tracking
	wordIndex = 0;

	// Clear any prior messages
	messageDisplay.innerText = '';

	// Highlight the first word
	highlightWord(wordIndex);

	// Clear the textbox
	currentWordTextbox.val = '';
	// set focus
	currentWordTextbox.focus();

	// Start the timer
	startTime = new Date().getTime();
});

currentWordTextbox.addEventListener('input', function (e) {
	// Get the current word
	const currentWord = words[wordIndex];

	// Get the current text
	const currentText = currentWordTextbox.value;

	// check if what they've typed is correct
	if (currentWord.startsWith(currentText)) {
		currentWordTextbox.className = '';

		// check if we've reached the end of the word
		if (currentText === currentWord) {
			// clear the currentWordTextbox for the new word
			currentWordTextbox.value = '';

			// move to the next word
			wordIndex++;

			// Check if it's the last word
			if (wordIndex === words.length) {
				const elapsedTime = new Date().getTime() - startTime;
				const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
				// Display success
				document.getElementById('message').innerText = message;
			} else {
				// highlight the next word
				highlightWord(wordIndex);
			}
		}
	} else {
		currentWordTextbox.className = 'error';
	}
});

function highlightWord(wordIndex) {
	for (const wordElement of quoteDisplay.childNodes) {
		wordElement.className = '';
	}
	quoteDisplay.childNodes[wordIndex].className = 'highlight';
}
