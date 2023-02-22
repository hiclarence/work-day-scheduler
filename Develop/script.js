$(function () {
  
  var now = dayjs()

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

  //loads value from localstorage
  for (var i=0; i<9; i++) {
    if (localStorage.getItem('hour-'.concat(i+9)) != null) {
      $(hourArray[i]).children()[1].value = localStorage.getItem('hour-'.concat(i+9));
    };
  }

  //sets for the current class 
  $("#currentDay").text(now.format('dddd, MMMM D YYYY'));
  
  //selects current time 
  var currentRow = $(hour[now.hour()]);
  currentRow.addClass("present");  
  
  var currentIndex = hourArray.indexOf(hour[now.hour()]);

  
  //applies class if the hours are outside working hours
  if (now.hour() > 17) {
    for (let i = 0; i<9; i++) {
      $(hourArray[i]).addClass("past");
    }
  } else if (now.hour() < 9){
    for (let i = 0; i<9; i++) {
      $(hourArray[i]).addClass("future");
      }
  }

  //applies appropriate class if inside working hours
  if ((now.hour()<18) && (now.hour()>8)) {
    for (let i = 0; i<currentIndex; i++) {
      $(hourArray[i]).addClass("past");
    };
    for (let i = 0; i<(hourArray.length - currentIndex); i++) {
      $(hourArray[i+currentIndex+1]).addClass("future");
    }; 
  }

  //finds the value within text area if save button is clicked
  for (var i = 0; i<hourArray.length; i++) {
    $(hourArray[i]).find("button").click(function() {
      let aInput = $(this).parent().children()[1].value;
      localStorage.setItem($(this).parent().attr('id'), aInput);
    }
    );
  }


}); 


