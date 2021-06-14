let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let delbuttons = document.getElementById("dbuttons")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	randstr = Math.random().toString(36).replace(/[^a-z]+/g, '')
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute("class", "todolist");
	li.setAttribute("id", "li-" + randstr);
	ul.appendChild(li);
	createButtonElement(input.value, randstr);
	input.value = "";
}

function createButtonElement(name, buttonid) {
	let btn = document.createElement("button");
	btn.setAttribute("id", buttonid);
	btn.setAttribute("name", "delete");
	btn.setAttribute("class", "dbutton");
	btn.append("Remove");
	delbuttons.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(item) {
	if (item.target.tagName === "LI") {
		item.target.classList.toggle("done");
	}
}

function deleteStuff(item) {
	todoitem = document.getElementById("li-" + item.target.id);
	if ( item.target !== null && todoitem !== null ) {
		item.target.remove();
		todoitem.remove();
	}
}

delbuttons.addEventListener("click", deleteStuff);
ul.addEventListener("click", doneTask);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

