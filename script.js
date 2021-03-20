var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var deleteBtns = document.getElementsByClassName("delete");
var li = document.querySelectorAll("li");

//toggle the done/undone tasks
for (let index = 0; index < li.length; index++) {
    li[index].addEventListener("click", function() {
        this.classList.toggle("done");
    })
}


//add event listener to first 6 btns in HTML file
for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", removeParent, false);
}


//from StackOverflow:
function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
}


//adding new items:

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onclick = removeParent;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.appendChild(btn);

    ul.appendChild(li);
    input.value = "";
}


function addToListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addToListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


button.addEventListener("click", addToListAfterClick);

input.addEventListener("keypress", addToListAfterKeypress);