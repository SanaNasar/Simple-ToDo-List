// JavaScript file for the To-Do List

var form = document.getElementById('todo_form');
var list = document.getElementById('input');
var preview = document.getElementById('preview');
var myList = document.getElementById('ol');
var theButton = document.getElementsByTagName('button')[0];

//Declaring the addText() function for adding the items to the list.

function addText(){
    var input = document.getElementById('input').value;
    //document.getElementById('do').innerHTML = input;
    var node =document.createElement("p");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('do').appendChild(node);
}

//Creating an event to remove the DOM elements
//Dynamically deletes elements form the browser

deleteAll.onClick.listen((e)); {
  todo_list.children.clear();
}





