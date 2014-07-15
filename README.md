#Lab: To-Do App

In this lab, you're going put together all you've learned about listening to DOM events and manipulating the DOM with JavaScript to build a dynamic Todo List application.


##Minimum Requirements
* A user should be able to add items to a 'todo' list from a form input using an input field and submit button.
* The form should clear when the user submits a task. And focus back on the todo item field.
* On every item appended to the 'todo' list, have a way to delete the item. This could be in the form of a 'delete' link, a checkbox to mark it as active or inactive, or a plain button with an `X` on it.

##How to get started
1. Start by constructing a basic `index.html` page as your starting point.

2. Setup your form to capture a task name. You can include a button to be part of the form to have many ways to submit.
3. Setup the `onsubmit` action for the form to use that data to append to the todo list. Use a combination of `document.createElement` and `document.createTextNode` for creating elements and `appendChild` for adding to the page.
4. Add `x` buttons and set event handlers on them such that click on them removes the appropriate todo item, with `.removeChild()`. (This means you can't use `.innerHTML` for the previous step (Step 3), make sure you know why.)

##Bonus
* Style the todo list with your own beautiful sense of design.
* Use **event delegation** so that clicking the `x` or other buttons removes the item. This will require setting up a click event on the main todolist container, and using `event.target` to determine if the click is coming from a button, using `event.target.parentNode` to find the parent object, and using `removeChild()` on an object that needs to be removed.

##Super Super Bonus
Using the built in HTML5 feature of local storage. Store your todo item into local storage. When your page is refreshed it will load the old todo items from localstorage.

* [Local Storage And How To Use It On Websites](http://www.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/)
