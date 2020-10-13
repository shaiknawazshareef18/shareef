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

Build this game in the following steps:

1. **Create the user interface**. The user interface will be built in HTML.
1. **Add styling**. You will add CSS styling to specific elements to indicate certain states in the game.
1. **Create the game**. Implement the Game rules.

### Create the user interface

Based on your experience with HTML, create a page with the following items:

> Tip, ensure you are adding the below elements to the `body` tag of your _index.html_ page.

1. Create a `h2` element for displaying the quote named `quote`:

   ```html
   <h2 id="quote"></h2>
   ```
- Create a `h2` element for displaying any messages named `message`:

   ```html
   <h2 id="message"></h2>
   ```

- Create a textbox for the user to use to type in the current word:

   ```html
   <div>
     <input type="text" id="typed-value" />
   </div>
   ```

   Set the ID of the textbox to be `typed-value`

- Add a Button the user will use to click to start the game:

   ```html
   <div>
     <button id="start" type="button">Start</button>
   </div>
   ```

   Set the ID of the button to be `start`

### Add styling

Based on your experience with CSS, create a stylesheet, file called _index.css_ with the following items:

- Create a CSS class named `highlight` which will be used for the current word with `background-color` as yellow:

   ```css
   .highlight {
     background-color: yellow;
   }
   ```

- Add another CSS class named `error`:

   ```css
   .error {
     background-color: lightcoral;
     border-color: red;
   }
   ```

   which will be used to color the textbox when the typed word is incorrect with `background-color` as `lightcoral` and `border` as `red`

   > Make sure you reference the stylesheet from the HTML page

   > Feel free to add any other headers and fun displays you might want to make your page look fun!

### Implement game rules using JavaScript

Based on your experience with JavaScript, create a JavaScript file _index.js_.

**-1- Create the following variables**

- An array with all `quotes`:

   ```javascript
   const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
   ];
   ```

- An empty array for all of the `words`

   ```javascript
   let words = [];
   ```

- A marker of the index (or location) of the current word in the quote called `wordIndex` set to `0`

   ```javascript
   let wordIndex = 0;
   ```

- The time the user started the challenge called `startTime` set to the current time:

   ```javascript
   let startTime = Date.now();
   ```

- Constants for the UI elements we'll be using
  - `quoteElement` for `quote`
  - `messageElement` for `message`
  - `typedValueElement` for `typed-value`

   ```javascript
   const quoteElement = document.getElementById('quote');
   const messageElement = document.getElementById('message')
   const typedValueElement = document.getElementById('typed-value');
   ```

   > Make sure you reference the JavaScript file from the HTML page

   > Use `let`, `const` and `var` as appropriate

**Setup event handlers**

Previously we learned about We're going to apply that knowledge to create our events and add the logic.

   1. **Handle start button clicked**. Create an event listener to handle the `click` event for the start button.

      ```javascript
      document
        .getElementById('<id of element>')
        .addEventListener('click', function () {
         // add logic
      })
      ```

   1. **Handle text element changed**. Create an event listener to handle the `input` element for text input element:

      ```javascript
      document
        .getElementById('<id of text element>')
        .addEventListener('input', (e) => {
          // implement logic
        })
      ```

**-1- When the user clicks start**  

> Tip, use the event handler for the start button and place the below code inside of it:

   ```javascript
   document
     .getElementById('<id of element>')
     .addEventListener('click', function () {
       // add user clicks start logic here
     })
   ```

When the user clicks start, you'll encode logic to do the following:

1. **Select a quote**. Randomly select a quote from the array.

   ```javascript
   const quoteIndex = Math.floor(Math.random() * quotes.length);
   const quote = quotes[quoteIndex];
   ```

- **Create span element for each word**. Surround each word in the quote with a `span` element (the `span` element will allow us to apply a class to highlight it)

   ```javascript
   words = quote.split(' ');
   const spanWords = words.map(function(word) { return `<span>${word} </span>`});
   ```

- **Indicate what word is being typed**. Set a counter for the current word so we know what the user is typing

   ```javascript
   wordIndex = 0;
   ```

- **Show the quote**. Display the quote at the top of the screen.

   ```javascript
   const quoteElement = document.getElementById('quote');
   quoteElement.innerHTML = spanWords.join('');
   ```

- **Highlight the first word**. Highlight the first word in the quote.

   ```javascript
   quoteElement.childNodes[0].className = 'highlight';
   ```

- **Prepare textbox for input**.
   1. Clear the textbox

      ```javascript
      typedValueElement.value = '';
      ```

   1. Set focus (so the user can start typing right away)

      ```javascript
      typedValueElement.focus();
      ```

- **Start measuring time**. Get the current time from the `Date` object to start timing.

   ```javascript
   startTime = new Date().getTime();
   ```

**-2- As the user types**

> Tip, place the below code in the event handler for the `input` event of the text element, like so:

   ```javascript
   document
     .getElementById('<id of text element>')
     .addEventListener('input', (e) => {
          // implement logic
     })
   ``` 

As each character is typed, you'll run the following game logic:

1. **Get current word from quote**. Retrieve the current word from the sentence.

   ```javascript
   const currentWord = words[wordIndex];
   ```

1. **Retrieve typed word**. Retrieve the value in the textbox.

   ```javascript
   const typedValue = typedValueElement.value;
   ```

- **Check status**. Check the current status:

   > Tip, compare `typedValue` with `currentWord`

   1. Last word completed
      - Display success message and elapsed time
   1. Current word completed (indicated by a space)
      - Clear the textbox
      - Update the index
      - Highlight the next word
   1. Current word in progress and correct
      - Ensure textbox is shown as normal
   1. Current word in progress is incorrect
      - Highlight textbox as red

## Test your application

You've made it to the end! The last step is to ensure our application works. Give it a shot! Don't worry if there are errors; **all developers** have errors. Examine the messages and debug as needed.