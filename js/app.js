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
                if ((week == 1 && count == dayOfWeek+1) || (week == 1 && count > dayOfWeek+1) ||(week > 1 && count <= lastDay.getDate()+6)) {
                    td.innerHTML = day;
                    day++;
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

/* window.onload = function(){
   var d = new Date();
   var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
   var month = d.getMonth();   //0-11
   var year = d.getFullYear(); //2014
   var first_date = month_name[month] + " " + 1 + " " + year;
   //September 1 2014
   var tmp = new Date(first_date).toDateString();
//   //Mon Sep 01 2014 ...
   var first_day = tmp.substring(0, 3);    //Mon
   var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
   var day_no = day_name.indexOf(first_day);   //1
   var days = new Date(year, month+1, 0).getDate();    //30
//   //Tue Sep 30 2014 ...
   var calendar = get_calendar(day_no, days);
   document.getElementById("month").innerHTML = month_name[month]+" "+year;
   document.getElementById("dates").appendChild(calendar);
 }


 function get_calendar(day_no, days){
   let table = document.createElement('table');
   let tr = document.createElement('tr');
   //row for the day letters
   for(let c=0; c<=6; c++){
       let td = document.createElement('td');
       td.innerHTML = "SMTWTFS"[c];
       tr.appendChild(td);
   }
   table.appendChild(tr);

//   //create 2nd row
   tr = document.createElement('tr');
   let c;
   for(c=0; c<=6; c++){
       if(c == day_no){
           break;
       }
       let td = document.createElement('td');
       td.innerHTML = "";
       tr.appendChild(td);
   }

   let count = 1;
   for(; c<=6; c++){
       let td = document.createElement('td');
       td.innerHTML = count;
       count++;
       tr.appendChild(td);
   }
   table.appendChild(tr);

//   rest of the date rows
   for(let r=3; r<=7; r++){
       tr = document.createElement('tr');
       for(let c=0; c<=6; c++){
           if(count > days){
               table.appendChild(tr);
               return table;
           }
           let td = document.createElement('td');
           td.innerHTML = count;
           count++;
           tr.appendChild(td);
       }
       table.appendChild(tr);
   }
   return table;
 }
*/
