//Note scripts
modal = document.getElementById("add-note-modal");


//TODO find add-note-btn
addNoteBtn = document.getElementById('add-note-btn');

//TODO find create-note element
createNoteBtn = document.getElementById("create-note");

cancelBtn = document.getElementById("cancel");
let noteSubmit = document.getElementById("noteSubmit");
let today = new Date();
let editNoteBtn = document.getElementById('edit-btn');
let deleteNoteBtn = document.getElementById('delete-btn');
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
    let monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];
    noteDate = today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();

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
    let date = document.getElementById("date");
    date.innerHTML = noteDate;
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
    fetchNotes(note);
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

//fetch saved notes and add to calendar
function fetchNotes(){
    //get notes details from localStorage
    let notes = JSON.parse(localStorage.getItem('notes'));
    for (i=0; i < notes.length; i++){
        let title = notes[i].title;
        let cell = document.getElementById(notes[i].date);
        //empty the cell
        while (cell.firstChild) {
            cell.removeChild(cell.firstChild);
        }
        //if calendar cell id matches note date, add note title to cell
        if (cell.getAttribute("id") == notes[i].date) {
            const noteItem = document.createElement("div");
            noteItem.setAttribute("class", "note-div");
            noteItem.innerHTML = title;
            cell.appendChild(noteItem);
        }
    }
}

function fetchExistingNotes(){
    let notesPage = document.getElementById("notes-page");
    let addNoteButton = document.getElementById("add-note-btn");

    if(localStorage.getItem("notes") !== null){
        let notes = JSON.parse(localStorage.getItem('notes'));
        let date = document.getElementById("date");
        for (i=0; i < notes.length; i++){
            let note = {
                title: notes[i].title,
                score: notes[i].score,
                text: notes[i].text,
                goal: notes[i].goal,
                label: notes[i].label,
                date: notes[i].date
            }
            //saveNote(note);
            // TODO display the note in the notes page
            // creating the note

            /*while (notesPage.lastChild.id != addNoteButton.getAttribute("id") ||
            notesPage.lastChild.id != date.getAttribute("id")) {
                notesPage.removeChild(notesPage.lastChild);
            }*/

            date.innerHTML = note.date;
            let t = document.createElement("h3");
            let titleText = document.createTextNode(note.title);
            t.id = "note-title";
            t.appendChild(titleText);
            let s = document.createElement("h3");
            s.id = "note-score";
            let scorevalue = document.createTextNode(note.score);
            s.appendChild(scorevalue);
            let header = document.createElement("header");
            header.id = "note-header";
            header.appendChild(t);
            header.appendChild(s);
            let noteBody = document.createElement("p");
            noteBody.id = "note-body";
            let p = document.createTextNode(note.text);
            noteBody.appendChild(p);
            let g = document.createElement("p");
            let goalName = document.createTextNode(note.goal);
            g.appendChild(goalName);
            g.id = "note-goal";
            let l = document.createElement("p");
            let labelName = document.createTextNode(note.label);
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

            notesPage.appendChild(newNote);
            // TODO update the labels list in the notes.html
            // TODO update the goals page: 1/update the goals line chart 2/if a goal is created on the fly from the notes page while creating a new note add the new goal to the goals page and the goals array in the localStorage
            // hide modal
            modal.style.display = "none";
            fetchNotes(note);
        }
    }

};

function editNote(){


}

//Calendar scripts

let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let thisMonth = document.getElementById('monthName');
let tableGrid = document.getElementById('dates');
let monthNum = new Date();
let currentMonth = monthNum.getMonth();
let displayDate = monthNum;
let monthPrevious = document.getElementsByClassName("prev")[0];
let monthForward = document.getElementsByClassName("next")[0];

thisMonth.innerHTML = monthArray[currentMonth] + ' ' + monthNum.getFullYear();

//Build the calendar grid
function makeGrid() {
    //set the first day of month as 1
    let firstDay = new Date(displayDate.getFullYear(),displayDate.getMonth(),1);
    //Get the last day of the month by setting month to next month and day as 0
    let lastDay = new Date(displayDate.getFullYear(),displayDate.getMonth()+1,0);
    var dayOfWeek = firstDay.getDay();
    let day = firstDay.getDate();
    let cellId = thisMonth.innerHTML;
    let count = 0;
    let week = 0;
    for(let i=0; i<5; i++){
        const tr = document.createElement('tr');
        tableGrid.appendChild(tr);
        week++;
        for(let j=0; j<7; j++){
            const td = document.createElement('td');
            tr.appendChild(td);
            td.setAttribute('class', 'cell');
            count++;
            //Start adding day numbers on the first day of the current month
            if ((week == 1 && count >= dayOfWeek+1)) {
                td.innerHTML = day;
                td.setAttribute('id', day + " " + cellId);
                day++;
            } else if (week > 1 && count <= lastDay.getDate()){
                count = day;
                td.innerHTML = day;
                td.setAttribute('id', day + " " + cellId);
                day++;
            }

        }
    }
    //Add a sixth row and add remaining day numbers when needed
    if (day-1 < lastDay.getDate() && week == 5){
        day--;
        const tr = document.createElement('tr');
        tableGrid.appendChild(tr);
        for(let s=0; s<7; s++){
            const td = document.createElement('td');
            tr.appendChild(td);
            td.setAttribute('class', 'cell');
            if (day < lastDay.getDate()){
                day++;
                td.innerHTML = day;
                td.setAttribute('id', day + " " + cellId);
            }
        }
    }
}
//Empty the calendar grid
function emptyGrid() {
    while(tableGrid.firstChild){
          tableGrid.removeChild(tableGrid.firstChild);
    }
}
//Update the calendar grid to next month
function nextMonth() {
  if (currentMonth+1 < monthArray.length) {
    currentMonth++;
  } else {
    currentMonth = 0;
    monthNum.setYear(monthNum.getFullYear()+1,0,1);
  }
  monthNum.setMonth(currentMonth);
  thisMonth.innerHTML = monthArray[currentMonth] + ' ' + monthNum.getFullYear();
  displayDate = new Date(monthNum.getFullYear(),monthNum.getMonth(),1);
  return displayDate;
}
//Update the calendar grid to previous month
function prevMonth() {
  if (currentMonth-1 >= 0) {
    currentMonth--;
  } else {
    currentMonth = 11;
    monthNum.setYear(monthNum.getFullYear()-1,11,31)
  }
  monthNum.setMonth(currentMonth);
  thisMonth.innerHTML = monthArray[currentMonth] + ' ' + monthNum.getFullYear();
  displayDate = new Date(monthNum.getFullYear(),monthNum.getMonth(),1);
  return displayDate;
}

function addNote() {
    let noteDate = new Date(monthNum.getDay(), monthNum.getMonth(), monthNum.getFullYear());

}

makeGrid();

monthPrevious.addEventListener('click',function(e){
    prevMonth();
    emptyGrid();
    makeGrid();
});

monthForward.addEventListener('click',function(e){
    nextMonth();
    emptyGrid();
    makeGrid();
});
//Display the selected tab and hide other tabs
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

fetchExistingNotes();
