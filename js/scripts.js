//Business Logic
function containOne(number, char){
  for(var i = 0; i<=number.length; i++){
    if(number[i]===char){
      return true;
    }
  }
  return false;
}

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
  //debugger;
  var results = [];
  var dave = "sorry"
  var boop = "boop"
  var beep = "beep"

  for(var i = 0; i < number; i++) {
    if (isDivisible(i, 3)) {
        results[i] = dave;
    }
    else if (containOne(i, '1')) {
      results[i] = boop;
    }
    else if (containOne(i, '0')) {
      results[i] = beep;
    }
    else {
      results[i] = i;      }
    }
    return results;

  }

  //User Interface
$(document).ready(function() {
  $("form#beepBoop").submit(function(event) {
    debugger;
    event.preventDefault();
    var input = $("input#input").val();
    var beepBoopString = beepBoop(input);
    $(".results").text(beepBoopString.toString());
  });
});
