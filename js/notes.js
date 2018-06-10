var modal = document.getElementById("add-note-modal");

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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

