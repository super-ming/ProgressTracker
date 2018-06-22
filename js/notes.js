modal = document.getElementById("add-note-modal");

addNoteBtn = document.getElementById('add-note-btn');

createNoteBtn = document.getElementById("create-note");

cancelBtn = document.getElementById("cancel");
let noteSubmit = document.getElementById("noteSubmit");
document.getElementById("noteDate").value = new Date();

addNoteBtn.onclick = function() {
    modal.style.display = "block";
}

cancelBtn.onclick = function() {
    modal.style.display = "none";
}

noteSubmit.onsubmit = function(e) {
    e.preventDefault();
    let noteTitle = document.getElementById("title").value;
    let noteScore = document.getElementById("noteScore").value;
    let noteText = document.getElementById("noteBody").value;
    let noteGoal = document.getElementById("select-goal").value;
    // for the moment multiple labels aren't handled
    let noteLabel = document.getElementById("add-labels").value;
    let noteDate = document.getElementById("noteDate").value;
    let note = {
        title: noteTitle,
        score: noteScore,
        text: noteText,
        goal: noteGoal,
        label: noteLabel,
        date: noteDate
    }
    saveNote(note);
    // TODO display the note in the notes page
    // creating the note
    let t = document.createElement("h3");
    let titleText = document.createTextNode(noteTitle);
    t.id = "note-title";
    t.appendChild(titleText);
    let s = document.createElement("h3");
    s.id = "note-score";
    let scorevalue = document.createTextNode(noteScore);
    s.appendChild(scorevalue);
    let header = document.createElement("header");
    header.id = "note-header";
    header.appendChild(t);
    header.appendChild(s);
    let noteBody = document.createElement("p");
    noteBody.id = "note-body";
    let p = document.createTextNode(noteText);
    noteBody.appendChild(p);
    let g = document.createElement("p");
    let goalName = document.createTextNode(noteGoal);
    g.appendChild(goalName);
    g.id = "note-goal";
    let l = document.createElement("p");
    let labelName = document.createTextNode(noteLabel);
    l.appendChild(labelName);
    l.id = "note-label";
    let editBtn = document.createElement("button");
    let edit = document.createTextNode("edit note");
    editBtn.appendChild(edit);
    editBtn.id = "edit-btn";
    editBtn.type = "button";
    let deleteBtn = document.createElement("button");
    let dlt = document.createTextNode("delete note");
    deleteBtn.appendChild(dlt);
    deleteBtn.id = "delete-btn";
    deleteBtn.type = "button";
    let footer = document.createElement("footer");
    footer.id = "note-footer";
    footer.appendChild(g);
    footer.appendChild(l);
    footer.appendChild(editBtn);
    footer.appendChild(deleteBtn);
    let newNote = document.createElement("div");
    newNote.id = "new-note";
    newNote.appendChild(header);
    newNote.appendChild(noteBody);
    newNote.appendChild(footer);
    let notesPage = document.getElementById("notes-page");
    notesPage.appendChild(newNote);
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
    let notes = [];
    if(localStorage.getItem("notes") !== null){
        notes = JSON.parse(localStorage.getItem('notes'));
    }
    //add note
    notes.push(note);
    //store back the array in the localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
}

//fetch saved notes
function fetchNotes(){
    //get notes details from localStorage
    let notes = JSON.parse(localStorage.getItem('notes'));
    for (i=0; i < notes.length; i++){
        var title = notes[i].title;

    }
}
