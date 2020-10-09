# Adding start event listener

Previously we learned about [event driven programming](../javascript-events/README.md). We're going to apply that knowledge to create our events and add the logic.

## Create event listener

The first event listener you need is when someone clicks on the `start` button.

> **TASK**: Create an event listener to handle this event.

## Add logic to listener to setup quote

The first thing we need to do is [create a random number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) to be the index of the quote we'll select from `quotes`. Our number needs to be between 0 and one less than the length of the array. (Remember, counting starts with zero).

> **TASK**: Add the necessary code **to the event listener** to create the random number and retrieve the item from the array using the index.

## Split the words from the quote into an array

We will be using `words` to store an array containing all words in the quote. In English, all words are separated by a space, so we can use `split` to convert the quote into an array of words. We also need to ensure the current `wordIndex` is set to `0` since a new game is starting.

> **TASK**: Add the necessary code **to the event listener** to `split` the words from the quote into an array; store the result in `words`. Set `wordIndex` to `0`.

## Update the UI

One of the requirements of the game is to highlight the word the user is currently working on. The best way to do this is by using `span` elements. We want to create a collection of `span` elements containing all of the various words, and display them in the `quote` element we setup in our HTML page.

At present, we have the words of the quote in an array called `words`. We cay use [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to create a new array with all words inside `span` elements. We can then [join](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join) them together to create a string. Finally, we can display it inside the `quote` element by using [innerHTML](https://developer.mozilla.org/docs/Web/API/Element/innerHTML). We'll finish by highlighting the first child node in `message` by setting the `className` to `highlight`.

```javascript
const spanWords = words.map(function(word) { return `<span>${word} </span>`});
// Convert into string and set as innerHTML on quote display
quoteElement.innerHTML = spanWords.join('');
// Clear any prior messages
messageElement.innerText = '';
// Highlight the first word
messageElement.childNodes[0].className = 'highlight';
```

> **TASK**: Do something

## Setup the textbox

The user will be typing into the `typedValueElement` textbox during the game. When they click start we want to ensure there's no `value` in the textbox by setting it to `''`. We also want to ensure it has `focus`.

Finally, an event listener needs to be added for new characters being `input`. A little later will create a function called `checkWord`, but for the time being we can still add the code for `addEventListener`.

> **TASK**: Add the necessary code **to the event listener** to clear the `value` of `typedValueElement` and ensure it has `focus`. Add an event listener for the `input` event which will call `checkWord`.

> **NOTE**: You may see an error message displayed in your code editor saying `checkWord` does not exist. Don't worry; we'll create this in just a little while.

## Start the timer

We're just about ready to start the game. Let's set `startTime` to the current time to begin the timer.

> **TODO**: Add the necessary code **to the event listener** to set `startTime` to the current time.

## Create event listener for input

We need [one more event listener for input](3-input.md) to capture keystrokes.
