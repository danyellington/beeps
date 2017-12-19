//Business Logic
var results = [];
var dave = "I'm sorry, Dave. I'm afraid I can't do that."
var boop = "boop"
var beep = "beep"


function findNumber(number){
  for(var i = 0; i <= number; i++) {

  if((i === 0) || (i.toString().match(/[0]/))){
      results.push(beep);
  }else if(i % 3 === 0){
    results.push(dave);
  }else if((i == 1) || (i.toString().match(/[1]/))){
    results.push(boop);
  }else{
    results.push(i);
  }
}
return results
}


  //User Interface
$(document).ready(function() {
  $("form#beepBoop").submit(function(event) {
    event.preventDefault();
    var input = $("input#input").val();
    var beepBoopString = findNumber(input);
    $(".results").text(beepBoopString);
  });
});
