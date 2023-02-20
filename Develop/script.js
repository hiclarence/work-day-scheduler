// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var now = dayjs()

  let week = {
    0: "Sunday", 
    1: "Monday",
    2: "Tueday", 
    3: "Wednesday",
    4: "Thursday", 
    5: "Friday",
    6: "Saturday"
  }
  
  let month = {
    0: "January", 
    1: "February",
    2: "March", 
    3: "April",
    4: "May", 
    5: "June",
    6: "July"
  }

  let hour = {
    9: "#hour-9", 
    10: "#hour-10",
    11: "#hour-11", 
    12: "#hour-12",
    13: "#hour-13", 
    14: "#hour-14",
    15: "#hour-15",
    16: "#hour-16",
    17: "#hour-17"
  }

  let hourArray = [ "#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17"]

  var title = $("#currentDay");
  title.text(week[now.day()] + ", " + month[now.month()] + " "+  now.date());
  
  //selects current time 
  var currentRow = $(hour[now.hour()]);
  currentRow.addClass("present");  
  
  var currentIndex = hourArray.indexOf(hour[now.hour()]);
  
  //applies all hours to be past if the hour is past working hours
  if (now.hour() > 17) {
    for (let i = 0; i<9; i++) {
      $(hourArray[i]).addClass("past");
    }
  }

  //applies all hours to be future if the hour is prior working hours
  if (now.hour() < 9) {
    for (let i = 0; i<9; i++) {
      $(hourArray[i]).addClass("future");
    }
  }

  for (let i = 0; i<currentIndex; i++) {
    $(hourArray[i]).addClass("past");
  };

  for (let i = 0; i<(hourArray.length - currentIndex); i++) {
    $(hourArray[i+currentIndex+1]).addClass("future");
  };
  


  // for every row before the present - make gray
  // for every row after the present - make green

  // TODO: 
  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // Use the this class to find where a user clicks, find the text associated with the id, store in local storage
  // 
  // HINT: 
  // - What does `this` reference in the click listener function? 
  // 
  // - How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  
  // - How might the id be useful when saving the description in local storage?
  //
  // =====================================
  // 
  // TODO: 
  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // Use day js to find the current time stamp
  // if the event happened in the past, color events gray, current - red, future - green
  // 
  // HINTS: 
  // - How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  
  // - How can Day.js be used to get the current hour in 24-hour time?
  //
  // =====================================
  //
  // TODO: 
  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 

  // use localStorage to get any items, if no items, then set items at the time stamp
  // reference time id when setting items - use an array of objects to organie the time
  // set events from 9 am to 5pm 
  // 
  // HINT: How can the id attribute of each time-block be used to do this?
  //
  // =====================================
  //
  // TODO: Add code to display the current date in the header of the page.
});
