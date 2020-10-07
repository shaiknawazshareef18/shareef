const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// array for storing the words of the current challenge
let words = [];
// stores the index of the word the player is currently typing
let wordIndex = 0;
// default value for startTime (will be set on start)
let startTime = Date.now();

document.getElementById('start').addEventListener('click', function () {
	// get a quote
	const quoteIndex = Math.floor(Math.random() * quotes.length);
	// Put the quote into an array of words
	words = quotes[quoteIndex].split(' ');
	// reset the word index for tracking
	wordIndex = 0;

	// UI updates
	// Create an array of span elements so we can set a class
	const spanWords = words.map(function(word) { return `<span>${word} </span>`});
	// Convert into string and set as innerHTML on quote display
	document.getElementById('quote').innerHTML = spanWords.join('');
	// Clear any prior messages
	document.getElementById('message').innerText = '';
	// Highlight the first word
	highlightWord(wordIndex);

	// Clear the textbox
	document.getElementById('current-word').value = '';
	// set focus
	document.getElementById('current-word').focus();
	// set the event handler
	document.getElementById('current-word').addEventListener('input', checkWord)

	// Start the timer
	startTime = new Date().getTime();
});

function checkWord(e) {
	// Get the current word
	const currentWord = words[wordIndex];
	// get the current value
	const currentValue = e.target.value;

	if (currentValue === currentWord && wordIndex === words.length - 1) {
		// end of sentence
		const elapsedTime = new Date().getTime() - startTime;
		const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
		// Display success
		document.getElementById('message').innerText = message;
		// remove the handler
		e.target.removeEventListener('input', checkWord);
	} else if (currentValue.endsWith(' ') && currentValue.trim() === currentWord) {
		// end of word?
		// clear the currentWordTextbox for the new word
		e.target.value = '';
		// move to the next word
		wordIndex++;
		highlightWord(wordIndex);
	} else if (currentWord.startsWith(currentValue)) {
		// currently correct
		// highlight the next word
		e.target.className = '';
	} else {
		// error state
		e.target.className = 'error';
	}
}

function highlightWord(wordIndex) {
	for (const wordElement of document.getElementById('quote').childNodes) {
		wordElement.className = '';
	}
	document.getElementById('quote').childNodes[wordIndex].className = 'highlight';
}
