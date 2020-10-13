# Event driven programming

One challenge when creating a [graphical user interface (GUI)](https://en.wikipedia.org/wiki/Graphical_user_interface) is the user can click on any button, type in any textbox, and otherwise choose any item they may like (assuming it's enabled). As a result we need to ensure our code can respond to the user's interactions with our application. This is done through [event driven programming](https://en.wikipedia.org/wiki/Event-driven_programming).

Event driven programming revolves around two main concepts: events and handlers.

## Events - something that happens

According to Merriam Webster's definition of an [Event](https://www.merriam-webster.com/dictionary/event), an event is, well, something that happens. Put in a programming concept, an event happens when a user clicks on a button, changes a value, or otherwise interacts with the page. We can then create code to respond to those events.

## Handlers - handles something

A Handler is going to ([perform a required function](https://www.merriam-webster.com/dictionary/handles)) on something. Our event is the something, and the handler is the response.

## Making this a bit more technical

We know something is going to happen that we want to handle. The way we handle anything when creating an application is through code. So, to tie this together, a handler is code that will respond to an event.

We've learned in the past if we want to set up a block of code to be executed on demand we create a function. We've already seen we can call a function by using its name. When creating an event handler the same thing will hold true - we're going to create a function! The only difference is rather than us calling it directly, it will be called when the event occurs. We'll do this by registering a function as an event handler.

# Creating event handlers

The universal method exposed in the DOM for registering event handlers is [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). `addEventListener` accepts two main parameters, the name of the event and the function we want to handle it.

## Hello click

Let's start with a [Hello, world](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) example. We have an HTML page with a `button` to click and a `div` to display some text.

```html
<button id="sample-button">Click me!</button>
<div id="output"></div>
```

## Registering our handler

Now we want to add an event handler to respond to someone `click`ing on the button. There are a couple of different ways to register our handler. One of the most common is to use `addEventListener`. One great advantage to `addEventListener` is it works universally; you can access all events by using `addEventListener`.

`addEventListener` accepts two parameters - the name of the event as a string, and the function we wish to execute to handle the event.

Let's figure out the name of the event we need. There are [dozens of possible events](https://developer.mozilla.org/docs/Web/API/Element#Events). Fortunately most are relatively intuitive, and there's generally only a small handful you'll actually find yourself using.

In our case we want to respond to the user clicking on the button. As you might expect, the name of the event we want is [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).

```javascript
// grab the button
// (technically not needed, but will make our code a bit more readable)
const button = document.getElementById('sample-button');

// setup our event handler
button.addEventListener('click', () => {
    // anonymous function
    // set the innerText of our div to Hello, click
    document.getElementById('output').innerText = 'Hello, click!';
});
```

You can copy/paste the code into a code editor of your choice and see it in action, or checkout my [CodePen with the Hello click example](https://codepen.io/GeekTrainer/pen/GRqKWvp?editors=1010).

## Getting more information about the event

With many events, the fact they occurred is all the information you need. Sometimes we may need to [retrieve some information from the object which raised the event](args.md).

# Event arguments

Event arguments (sometimes known as args) is an object which contains more information about the event which was raised. Using event args you can access the object which raised the event (such as the textbox or button). This can allow you to read data and modify items without having to hard code names of items.

## Event arg parameter

Event args are passed as a parameter into the function handling the event. Conventionally the parameter is named `e`, although you can use whatever you like. The properties are defined by the [Event interface](https://developer.mozilla.org/docs/Web/API/Event). The most common property you will use is `target`, which represents the object which raised the event; if a user clicked on a button, then the button would be available on `target`.

## Using event args

Let's see how we could access the text in a textbox. We will use the [input](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event), which is raised every time the user types a character into a textbox.

```html
<input type="text" id="demo-textbox">
```

```javascript
document.getElementById('demo-textbox').addEventListener('input', function (e) {
    const textbox = e.target;
    console.log(textbox.value);
});
```

If you put this into a code editor and test in a browser, or [explore it on a CodePen](https://codepen.io/GeekTrainer/pen/ZEOzJXo?editors=1011), you'll notice every time you add a character to the textbox the full text is displayed in the console. You can explore some of the other properties as well.

---

## Build the game

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

# Adding the input event listener

The [input](https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event) event is raised every time the user hits a key on their keyboard. This is perfect for us as it will allow us to ensure whatever they've typed thus far is correct.

In the event listener, we are going to grab the current word and whatever the user has typed thus far. We'll then check if they've completed the sentence, completed the word, are in progress of typing the word correctly, or have made a mistake.

Let's start by adding an event listener for input.

> **TASK**: Add the event listener for `input` for `typedValueElement` element.

## Getting the current values

First thing's first. Let's grab the current word from the active quote, and the value the user has typed thus far.

> **TASK**: **In the event listener**, add the code to:
>
> - Retrieve the current word from `words` by using `wordIndex` (which tracks the index of the current word) and store it in a variable called `currentWord`
> - Retrieve the `value` from `typedValueElement` and store it in a variable called `typedValue`

## Check if the quote is complete

We are going to create a series of `if` statements to figure out where the user is in the game. The first step is to see if the sentence is complete. We can do this by checking if `typedValue` is equal to `currentWord`, and if `wordIndex` is equal to one less than the `length` of `quote`.

If the condition matches the criteria, we can perform the following actions:

- Calculate the `elapsedTime` by subtracting `startTime` from the current time
- Display a message in `messageElement` showing congratulations for the user and the number of seconds they took

> **TASK**: **In the event listener**, add the code to implement the logic listed above.

## Check if the current word is complete

Next we'll add an `else if` statement to see if the current word is complete (we know the quote is still in progress). Because spaces separate words in English we can look to see if `typedValue` `endsWith` a space. If it does, we can then `trim` `typedValue` (because the word itself does not contain a space) and see if it is equal to `currentWord`. If it does we can then setup the next word by performing the following actions:

- Reset `typedElement`'s `value` to `''`
- Increment `wordIndex`
- Loop through all `childNodes` in `quoteElement` and set each `childNode`'s `className` to `''`
- Set the `className` of `childNode` in `quoteElement` of the current `wordIndex` to `highlight`

> **TASK**: **In the event listener**, add the code to implement the logic listed above.

## Check if the typed value is correct

At this point we know neither the quote nor word are complete. Let's see if what the user has typed thus far on the word is correct. We'll add another `else if` statement to see if `currentWord` `startsWith` `typedValue`. If it does, we'll set the `className` of `typedValueElement` to be `''`, which would remove any error markings it might have.

> **TASK**: **In the event listener**, add the code to implement the logic listed above.

## And finally, we have an error state

If we've made it this far we know the quote is not complete, the word is not complete, and the currently typed value is incorrect. This means the user has typed in an incorrect value. We need to add an `else` statement to set `typedValueElement`'s `className` to be `error`.

> **TASK**: **In the event listener**, add the code to implement the logic listed above.

## Test your application

You've made it to the end! The last step is to ensure our application works. Give it a shot! Don't worry if there are errors; **all developers** have errors. Examine the messages and debug as needed.


