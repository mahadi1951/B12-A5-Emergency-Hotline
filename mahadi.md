1.getElementById:

a. Find an element by its unique id.
b. Always returns only one element (or null if not found).
c. Its the fastest method , but only works with id.

getElementByClassName:

a. Finds elements by a given class name.
b. can match multiple elements ,not just one.

querySelector:

a finds the first element that matches a css selector.
b returns a single element (or null).

querySelectorAll:

a. Finds all elements that match a css selector.
b.can be looped through easily.

2. document.createElement(tagName) to create a new element (like div, p ,button etc)
appendChild(newElement) → adds at the end inside a parent.
prepend(newElement) → adds at the beginning inside a parent.
insertBefore(newElement, referenceElement) → inserts before a specific existing element.

after(newElement) / before(newElement) → inserts relative to an element.

3. 
Event Bubbling 

Event bubbling means that when an event happens on an element, it first runs on that element, and then it bubbles up (moves upward) through its parent elements in the DOM tree — all the way up to the document (and even window).

How it works:

a.Suppose you click a button inside a div.

b2.The click event first fires on the button itself.

c.Then it "bubbles" up to the parent div.

4.
Event Delegation in JavaScript

Event Delegation is a technique where instead of adding event listeners to many child elements, you attach a single event listener to a common parent.
That parent can then detect events coming from its children using event bubbling.

Why it is useful:

a.Performance:

Saves memory and improves performance because you don’t need to attach separate event listeners to potentially hundreds of child elements.

b.Handles Dynamic Content:

Works even for elements that are added later to the DOM, since the listener is on the parent (which already exists).

1. event.preventDefault()

Purpose: Stops the browser’s default behavior for an event.

Example behaviors it can stop:
Preventing a link (<a>) from navigating to a URL
Preventing a form from submitting.
Preventing right-click context menu from opening.
It does not stop the event from bubbling up the DOM.

👉 Think: Don’t do the browser’s default action for this event.

2. event.stopPropagation()

Purpose: Stops the event from bubbling (or capturing) further up or down the DOM tree.
Other parent/ancestor elements won’t receive the event.
It does not stop the browser’s default behavior.

👉 Think: Don’t let this event travel any further.