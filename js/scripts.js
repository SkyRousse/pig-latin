// business logic
var pigArrays = [];
function pigLatin(englishArrays) {
  if (englishArrays[0] === "a" || englishArrays[0] ==="e" || englishArrays[0] ==="i" || englishArrays[0] ==="o" || englishArrays[0] ==="u") {
  pigArrays = pigArrays.concat(englishArrays);
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
    pigArrays = pigLatin(englishArrays);
    $("p#output").text(pigArrays);
  });
});
