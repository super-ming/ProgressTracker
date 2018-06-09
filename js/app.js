let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let thisMonth = document.getElementById('monthName');
let tableGrid = document.getElementById('dates');
let monthNum = new Date();
let showMonth = monthNum.getMonth();
let displayDate = monthNum;
let monthPrevious = document.getElementsByClassName("prev")[0];
let monthForward = document.getElementsByClassName("next")[0];

thisMonth.innerHTML = monthArray[showMonth] + ' ' + monthNum.getFullYear();

function nextMonth() {
  if (showMonth+1 < monthArray.length) {
    showMonth++;
  } else {
    showMonth = 0;
    monthNum.setYear(monthNum.getFullYear()+1,0,1);
  }
  monthNum.setMonth(showMonth);
  thisMonth.innerHTML = monthArray[showMonth] + ' ' + monthNum.getFullYear();
  displayDate = new Date(monthNum.getFullYear(),monthNum.getMonth(),1);
  return displayDate;
}

function prevMonth() {
  if (showMonth-1 >= 0) {
    showMonth--;
  } else {
    showMonth = 11;
    monthNum.setYear(monthNum.getFullYear()-1,11,31)
  }
  monthNum.setMonth(showMonth);
  thisMonth.innerHTML = monthArray[showMonth] + ' ' + monthNum.getFullYear();
  displayDate = new Date(monthNum.getFullYear(),monthNum.getMonth(),1);
  return displayDate;
}

function makeGrid() {
    //set the first day of month as 1
    let firstDay = new Date(displayDate.getFullYear(),displayDate.getMonth(),1);
    //Get the last day of the month by setting month to next month and day as 0
    let lastDay = new Date(displayDate.getFullYear(),displayDate.getMonth()+1,0);
    var dayOfWeek = firstDay.getDay();
    let day = firstDay.getDate();
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
            if ((week == 1 && count >= dayOfWeek+1)) {
                td.innerHTML = day;
                day++;
            } else if (week > 1 && count <= lastDay.getDate()){
                count = day;
                td.innerHTML = day;
                day++;
            }
        }
    }
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
            }    
        }
    }
}

function emptyGrid() {
    while(tableGrid.firstChild){
          tableGrid.removeChild(tableGrid.firstChild);
    }
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

// Notes script

/* Create a close button */
// var myNodeList = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodeList.length; i++){
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// }

// /* Action for the close button */
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++){
//     close[i].onclick = function(){
//         var div = this.parentElement;
//         div.style.display = "none"
//     }
// }

// /* Create a new list item */
// function newElement(){
// var li = document.createElement("li");
// var inputValue = document.getElementById("input").value;
// var t = document.createTextNode(inputValue);
// li.appendChild(t);
// if(inputValue === ''){
//     alert("Please enter an item!");
// } else {
//     document.getElementById("myUL").appendChild(li);
// }
// document.getElementById("input").value = "";
// var span = document.createElement("SPAN");
// var txt = document.createTextNode("\u00D7");
// span.className = "close";
// span.appendChild(txt);
// li.appendChild(span);

// for(i=0; i < close.length; i++){
//     close[i].onclick = function(){
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }
// }