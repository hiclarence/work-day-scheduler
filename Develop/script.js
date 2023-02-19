// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var now = dayjs()
  console.log(now.$d);
  
  // create p element with time stamp
  // find the current stamp with day js

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
