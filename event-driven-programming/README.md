# Event-Driven Programming - Build a Typing Game

![video](video-url)

[slides](slides.pptx)

## [Pre-lecture quiz](.github/pre-lecture-quiz.md)

### Introduction

Typing is one of the most underrated skills of the developer. The ability to quickly transfer thoughts from your head to your editor allows creativity to flow freely. One of the best ways to learn is to play a game! So, let's build a typing game!

You're going to use the JavaScript, HTML and CSS skills you have built up so far to create a typing game. The game will present the player with a random quote (we're using [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes) quotes) and time how long the player takes to type it out accurately.

As the user types, the current word will be highlighted on the quote. When the user completes the word (indicated by clicking the space bar) it will disappear from the textbox and the next word will be highlighted. Upon correct completion of the quote, the game will display the elapsed time.

![demo](../demo.gif)

### Prerequisites

This lesson assumes you're familiar with the following concepts:

- Creating text input and button controls
- CSS and setting styles using classes
- JavaScript basics
  - Creating an array
  - Creating a random number
  - Getting the current time

### Preparation

Break the problem down into smaller components so you can build it in steps. This game requires:

- A textbox the player will use to type the quote
- A button the player will click to start their challenge
- A CSS class to highlight the current word
- A CSS class to highlight the textbox as red when the user has typed something incorrect

## Game Flow

At a high level, the logic will look like this:

#### When the user clicks start

1. Randomly select a quote from the array
1. Surround each word in the quote with a `span` element (the `span` element will allow us to apply a class to highlight it)
1. Set a counter for the current word so we know what the user is typing
1. Display the quote
1. Highlight the first word
1. Clear the textbox and set focus (so the user can start typing right away)
1. Get the current time to start timing

#### As the user types

1. Get the current value from the textbox
1. Get the current word the user should be typing
1. Check to ensure the text in the textbox is what the word starts with
1. If the text is incorrect, set the color of the textbox to red
1. If the text is correct, set the color of the textbox back to default
1. Check if the word is complete (the user hit space)
1. If the word is complete, clear the textbox, highlight the next word and update the current word index
1. If the quote is complete display a congratulations message and the elapsed time

## Create the user interface

Based on your experience with HTML, create a page with the following items:

- `h2` element for displaying the quote named `quote`
- `h2` element for displaying any messages named `message`
- Label and textbox for the user to use to type in the current word
- Set the ID of the textbox to be `current-word`
- Button the user will use to click to start the game
- Set the ID of the button to be `start`

### Task:

TODO: set up project with files

> Feel free to add any other headers and fun displays you might want to make your page look fun!

### Create the necessary CSS

We'll need two classes - `highlight` for the current word, and `error` to flag the textbox when the typed word is incorrect. Based on your experience with CSS create the following classes:

- `highlight` with a background color of `red`
- `error` with a background color of `lightcoral` and a border color of `red`

### Task:

TODO: set up CSS

### Create the starter JavaScript

Create a file to store the JavaScript, and reference it in the HTML page. Add variables to store the following:

- An array for all of the `words`
- A marker of the index (or location) of the current word in the quote called `wordIndex`
- The time the user started the challenge called `startTime`

### Task:

TODO: set up JS file

### Set up your variables

Create `const` variables in the JavaScript file to store the elements we're using for our game.

### Task:

- Variable named `quoteDisplay` to store `quote`
- Variable named `messageDisplay` to store `message`
- Variable named `startButton` to store `start`
- Variable named `currentWordTextbox` to store `current-word`

✅ TODO: knowledge check on using `const`

## Using `document`

When working with JavaScript in the browser you will have access to [document](https://developer.mozilla.org/docs/Web/API/Document). By using the `document` object you can access all items on the page. With `document` you can make whatever modifications you wish to make to the structure of the HTML page. At a higher level, the `document` object allows you to use the [Document Object Model or DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model). Fortunately we don't need to know everything about the DOM; knowing just a couple of key functions and properties will give you quite a bit of power.

✅ TODO: knowledge check on `document` based on reading above

### Retrieving elements

From `document` we can retrieve elements through a series of different functions, each executing different queries to find the items we're looking for. We can find items based on their ID, class, or even the tag name.

- `document.getElementById('<id>')` finds the one element with the id you specify
- `document.getElementsByClassName('<className>')` returns an array of all elements with the class name you specify
- `document.getElementsByTagName('<tagName>')` returns an array of all elements with the tag name you specify

## Task:

TODO: set up the elements retrieval

## Event listeners

When creating an interactive HTML page you will typically use a methodology called [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming). Event-driven programming allows us to create code which runs when an event happens. What's an event? Well, basically everything which happens when the user is interacting with the page!

✅ TODO: knowledge check on event-driven programming based on reading above

If we think about the game we're creating, the user is going to click on the start button and type in the textbox. We don't know when they're going to perform those actions, in what order they'll do them in, or even if they'll do them at all! This means we need to tell the browser, "Hey - I don't know when this is going to happen, but when the user clicks on this button I need you to run this code for me."

In more technical terms, we tell the browser what code we want to run by "registering an event listener". An event listener (sometimes called handler) is a function which runs in response to the event. You'll notice there's a [long list of events](https://developer.mozilla.org/docs/Web/Events) which could be raised by a page. But fear not! Just like `document`, we don't need to know all of the events which could be raised!

Let's talk about our game and the flow. We know the user is going to click on the start button to start the game, and then type in the textbox when they're typing out the quote. As a result, we're going to need to register two event listeners. Event listeners are placed on the elements the user will be interacting with - the button and textbox in our case.

You register an event listener by using the following syntax:

``` javascript
element.addEventListener('<eventName>', function() {
    // code here
})
```

In the above code, `element` would be the name of the variable which holds the reference we're looking to add an event listener to. In our case this could be `startButton`. The first parameter passed to `addEventListener` is the name of the event, which could be one of the ones listed below. Finally, we create a `function` which will contain the code we want to run when the event is raised.

- `blur` - the user placed their cursor away from an item which had focus or clicked on something else
- `click` - the user clicks on something
- `focus` - the user has placed the cursor inside of an item (such as a textbox)
- `input` - the value of a textbox or similar control has changed

## Task

Create two event listeners to help run our game. For now you can leave the code of the function empty; we'll continue to build on it as we go.

- `startButton` for when the user clicks on the button
- `currentWordTextbox` for when the user changes the value of the textbox by typing

TODO: flesh out the code sample here

> **HINT**: The necessary event name is listed above

✅ TODO: knowledge check on the types of events you're using

---

🚀Challenge: TODO add a challenge here to enhance the game

## [Post-lecture quiz](.github/post-lecture-quiz.md)

## Review & Self Study

TODO: closing statement, reference list

**Assignment Due [MM/YY]**: [Assignment Name](assignment.md)


