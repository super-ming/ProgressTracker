let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let thisMonth = document.getElementById('monthName');
let tableGrid = document.getElementById('dates');
let monthNum = new Date();
let currentMonth = monthNum.getMonth();
let displayDate = monthNum;
let monthPrevious = document.getElementsByClassName("prev")[0];
let monthForward = document.getElementsByClassName("next")[0];
let cellId = thisMonth.innerHTML;

thisMonth.innerHTML = monthArray[currentMonth] + ' ' + monthNum.getFullYear();
//Build the calendar grid
function makeGrid() {
    //set the first day of month as 1
    let firstDay = new Date(displayDate.getFullYear(),displayDate.getMonth(),1);
    //Get the last day of the month by setting month to next month and day as 0
    let lastDay = new Date(displayDate.getFullYear(),displayDate.getMonth()+1,0);
    var dayOfWeek = firstDay.getDay();
    let day = firstDay.getDate();
    cellId = cellId+"-"+day;
    let count = 0;
    let week = 0;
    for(let i=0; i<5; i++){
        const tr = document.createElement('tr');
        tableGrid.appendChild(tr);
        week++;
        for(let j=0; j<7; j++){
            const td = document.createElement('td');
            tr.appendChild(td);
            count++;
            //Start adding day numbers on the first day of the current month
            if ((week == 1 && count >= dayOfWeek+1)) {
                td.innerHTML = day;
                td.setAttribute('id', cellId);
                day++;
            } else if (week > 1 && count <= lastDay.getDate()){
                count = day;
                td.innerHTML = day;
                td.setAttribute('id', cellId);
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
            if (day < lastDay.getDate()){
                day++;
                td.innerHTML = day;
                td.setAttribute('id', cellId);
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
