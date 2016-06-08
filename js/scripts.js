// business logic
var pigArrays = [];
function pigLatin(englishArrays) {
  if (englishArrays[0] === "a" || "e" || "i" || "o" || "u") {
  pigArrays.push(englishArrays);
  pigArrays.push("a", "y");
  
  }
  return pigArrays.join('');
  console.log(pigArrays);
};

// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    // debugger;
    var englishString = $("input#english-input").val();
    var englishArrays = englishString.split("");
    console.log(englishArrays);
    pigLatin(englishArrays);
    $("p#output").text(pigArrays);
  });
});
