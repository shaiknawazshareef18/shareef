# Event-Driven Programming - Build a Typing Game

![video](video-url)

[slides](slides.pptx)

## [Pre-lecture quiz](.github/pre-lecture-quiz.md)

## Introduction

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

## Preparation

Break the problem down into smaller components so you can build it in steps. This game requires:

- A textbox the player will use to type the quote
- A button the player will click to start their challenge
- A CSS class to highlight the current word
- A CSS class to highlight the textbox as red when the user has typed something incorrect

## Game Flow

At a high level, the logic will look like this:

### When the user clicks start

When the user clicks start, you'll run logic to do the following:

- Randomly select a quote from the array
- Surround each word in the quote with a `span` element (the `span` element will allow us to apply a class to highlight it)
- Set a counter for the current word so we know what the user is typing
- Display the quote
- Highlight the first word
- Clear the textbox and set focus (so the user can start typing right away)
- Get the current time to start timing

### As the user types

As each character is input, you'll run logic to do the following:

- Retrieve the current word from the sentence
- Retrieve the value in the textbox
- Check the current status
  - Last word completed
    - Display success message and elapsed time
  - Current word completed (indicated by a space)
    - Clear the textbox
    - Update the index
    - Highlight the next word
  - Current word in progress and correct
    - Ensure textbox is shown as normal
  - Current word in progress is incorrect
    - Highlight textbox as red

## Getting started

Let's start by [creating the interface and necessary files](./1-interface.md).
