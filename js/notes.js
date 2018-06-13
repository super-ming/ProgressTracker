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
    var noteTitle = document.getElementById("title").value;
    var noteScore = document.getElementById("noteScore").value;
    var noteText = document.getElementById("noteBody").value;
    var noteGoal = document.getElementById("select-goal").value;
    // for the moment multiple labels aren't handled
    var noteLabel = document.getElementById("add-labels").value;
    var note = {
        title: noteTitle,
        score: noteScore,
        text: noteText,
        goal: noteGoal,
        label: noteLabel
    }
    saveNote(note);
    // TODO display the notein the notes page
    // TODO update the labels list in the notes.html 
    // TODO update the goals page: 1/update the goals line chart 2/if a goal is created on the fly from the notes page while creating a new note add the new goal to the goals page and the goals array in the localStorage
    // hide modal
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// saving the note
function saveNote(note){
    varnotes = [];
    if(localStorage.getItem("notes") !== null){
        notes = JSON.parse(localStorage.getItem('notes')); 
    } 
    //add note
    notes.push(note);
    //store back the array in the localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
}