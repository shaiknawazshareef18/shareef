# Event-Driven Programming - Build a Typing Game

Typing is one of the most underrated skills of the developer. The ability to quickly transfer thoughts from your head to your editor allows creativity to flow freely. One of the best ways to learn is to play a game!

> So, let's build a typing game!

You're going to use the JavaScript, HTML and CSS skills you have built up so far to create a typing game.

## How the game works

The game will present the player with a random quote (we're using [Sherlock Holmes](https://en.wikipedia.org/wiki/Sherlock_Holmes) quotes). A quote consist of a number of words. The object of the game is to type out each word correctly as fast as possible.  The game will time how long the player takes to type out the entire quote accurately.

### Game flow

1. **User types**. As the user types, the current word will be highlighted on the quote.
1. **Indicate word completion**. The user _completes_ the word by clicking the _space bar_. This action will make the typed word disappear from the textbox and the next word in the sentence, that you should type, will be highlighted.
1. **Game verifies submitted word input**. Upon correct completion of the quote, the game will display the total _elapsed time_.

![demo](./demo.gif)

### Prerequisites

This lesson assumes you're familiar with the following concepts:

- Creating text input and button controls
- CSS and setting styles using classes
- JavaScript basics
  - Creating an array
  - Creating a random number
  - Getting the current time

## Preparation

Break the problem down into smaller components so you can build it in steps. This game requires:

- **A textbox for the quote input**. The player will need to use a textbox to type in words belonging to the quote
- **A start button**. A button the player will click to start their challenge.
- **A visual highlighting for the next word in the quote**. A CSS class to highlight the current word.
- **A visual indication for an erroneous input**. A CSS class to highlight the textbox as red when the user has typed something incorrect.

## Lesson

[Event-Driven Programming](./javascript-events/README.md)

# Credits

Written with ♥️ by [Christopher Harrison](http://www.twitter.com/geektrainer)
