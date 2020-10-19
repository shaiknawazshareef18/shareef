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

If you put this into a code editor and test in a browser, or [explore it on my CodePen](https://codepen.io/GeekTrainer/pen/ZEOzJXo?editors=1011), you'll notice every time you add a character to the textbox the full text is displayed in the console. You can explore some of the other properties as well.

## Putting this to use

Let's put this to use with a full project. We're going to [create a typing game](../project/README.md) as our way of testing our knowledge.
