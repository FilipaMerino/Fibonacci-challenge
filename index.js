
var inputNumber = document.getElementById("inputNumber");
var generateButton = document.getElementById("generateButton");
var output = document.getElementById("output");

generateButton.addEventListener("click", function turnIntoInteger() {
  var number = parseInt(inputNumber.value);
  var sequence = fibonacciGenerator(number);
  output.textContent = sequence.join(", ");
});

function fibonacciGenerator(n) {
  var output = [];
// 1. If n === 1, output = [0]
// 2. If n === 2, output = [0,1]
// 4. Fazer um FOR loop - We want this if statement to run each time, until the input < n;
// 3. If n => 2, output = [0,1] + (last number + second to last number)

if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}
