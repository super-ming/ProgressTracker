var modal = document.getElementById("add-note-modal");

document.getElementById("add-note-btn").addEventListener("click", displayModal());
document.getElementById("cancel").addEventListener("click", cancel());
document.getElementById("create-note").addEventListener("click", createNote());

function displayModal(){
   modal.style.display = "block";
}

function cancel(){
    // hide modal
    modal.style.display = "none";
}

function createNote(){
    // TODO save user input and create new note object and save it in the local storage
    // hide modal 
    modal.style.display = "none";
}
/*
var modal = document.getElementById('create-note-modal');

var addNoteBtn = document.getElementById('add-note-btn');

var createNoteBtn = document.getElementById("create-note");

var cancelBtn = document.getElementById("cancel");

addNoteBtn.onclick = function() {
    modal.style.display = "block";
}

cancelBtn.onclick = function() {
    modal.style.display = "none";
}

createNoteBtn.onclick = function() {
    // TODO save user input and create new note object and save it in the local storage
    // hide modal
    modal.style.display = "none";
}
*/
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

