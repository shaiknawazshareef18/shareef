
# Create the user interface

## HTML task

Based on your experience with HTML, create a page with the following items:

- `h2` element for displaying the quote named `quote`
- `h2` element for displaying any messages named `message`
- Label and textbox for the user to use to type in the current word
- Set the ID of the textbox to be `typed-value`
- Button the user will use to click to start the game
- Set the ID of the button to be `start`

## CSS task

Based on your experience with CSS, create a stylesheet with the following items:

- Class named `highlight` which will be used for the current word with `background-color` as yellow
- Class named error which will be used to color the textbox when the typed word is incorrect with `background-color` as `lightcoral` and `border` as `red`

> Make sure you reference the stylesheet from the HTML page

> Feel free to add any other headers and fun displays you might want to make your page look fun!

## JavaScript task

Based on your experience with JavaScript, create a JavaScript file with the following items:

- An array with all `quotes` [see: quotes list](#quotes)
- An empty array for all of the `words`
- A marker of the index (or location) of the current word in the quote called `wordIndex` set to `0`
- The time the user started the challenge called `startTime` set to the current time
- Constants for the UI elements we'll be using
  - `quoteElement` for `quote`
  - `messageElement` for `message`
  - `typedValueElement` for `typed-value`

> Make sure you reference the JavaScript file from the HTML page

> Use `let`, `const` and `var` as appropriate

✅ TODO: knowledge check on using `const`

## Create event handler for start

With the scaffolding of the application complete, let's turn our attention to creating the [event handler for start](2-start.md).

## Quotes

```javascript
quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
```
