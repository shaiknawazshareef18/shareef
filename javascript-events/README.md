# Event driven programming

One challenge when creating a [graphical user interface (GUI)](https://en.wikipedia.org/wiki/Graphical_user_interface) is the user can click on any button, type in any textbox, and otherwise choose any item they may like (assuming it's enabled). As a result we need to ensure our code can respond to the user's interactions with our application. This is done through [event driven programming](https://en.wikipedia.org/wiki/Event-driven_programming).

Event driven programming revolves around two main concepts, events and handlers.

## Events - something which happens

Let's define the term event by starting with the [Merriam Webster](https://www.merriam-webster.com/dictionary/event) definition.

> **event** \i-'vent\ (*n*): Something which happens (see also: occurrence)

If we apply this definition to programming, an event is, well, something which happens. And you'd be exactly right! An event is something which happens. A user clicks on a button, changes a value, or otherwise interacts with the page. Those are all events - something which happens. We can then create code to respond to those events.

## Handlers - handles something

With the term event defined, let's return to [Merriam Webster](https://www.merriam-webster.com/dictionary/handler) for the definition of handler.

> **handler** \'han(d)-ler\ (*n*): one that handles something

Once again, applying this definition to programming, a handler is going to handle ([performs a required function](https://www.merriam-webster.com/dictionary/handles)) something. Our event is the something, and the handler is the response.

## Making this a bit more technical

We know something is going to happen which we want to handle. The way we handle anything when creating an application is through code. So, to tie this together, an handler is code which will respond to an event.

We've learned in the past if we want to setup a block of code to be executed on demand we create a function. We've already seen we can call a function by using its name. When creating an event handler the same thing will hold true - we're going to create a function! The only difference is rather than us calling it directly, it will be called when the event occurs. We'll do this by registering a function as an event handler.

## Getting into the code

Now that we have the core concepts, let's [dig into some code](registration.md)!
