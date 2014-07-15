// JavaScript file for the To-Do List

var form = document.getElementById('todo_form');
var list = document.getElementById('input');
 
var myList = document.getElementById('do');
// var theButton = document.getElementsByTagName('button')[0];


 
	form.onsubmit = function(event) {
	event.preventDefault();
	
	var newItemList = document.createElement('li');
	var newListNode = document.createTextNode(list.value);

	newItemList.appendChild(newListNode);
	myList.appendChild(newItemList);

	var removeItem = document.createTextNode('Done');
	var removeButton = document.createElement('button');

	removeButton.appendChild(removeItem);
	newItemList.appendChild(removeButton);

	removeButton.onclick = function() {
		myList.removeChild(newItemList);
	};

//Creating an event to remove the DOM elements
//Dynamically deletes elements form the browser

// deleteAll.onClick.listen((e)); {
// todo_list.children.clear();
//}

};





