//Business Logic

function containOne(number, char){
  if(number.toString().match(char)){
    return number;
  }
}

var search1 = /[1]/;
var search0 = /[0]/;

function isDivisible(num1, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if(num1 % num2 === 0){
    return true;
  }
  else {
    return false;
  }
}


function beepBoop(number) {
  var results = [];
  var dave = "I'm sorry Dave, I'm afraid I can't do that."
  var boop = "boop"
  var beep = "beep"

  for(var i = 0; i <= number; i++) {
    if (i === 0) {
      results.push(beep)
    }
    else if (containOne(i, search1)) {
      results.push(boop);
    }
    else if  (isDivisible(i, 3)) {
      results.push(dave);
    }
    else {
      results.push(i);
    }
    }
    return results.join(", ");

  }

  //User Interface
$(document).ready(function() {
  $("form#beepBoop").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    var beepBoopString = beepBoop(input);
    $(".results").text(beepBoopString.toString());
  });
});
