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
