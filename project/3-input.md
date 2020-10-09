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
