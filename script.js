let numbers = document.querySelectorAll(".number");
operations = document.querySelectorAll(".operator");
deciamlButton = document.getElementById("decimal");
cButton = document.getElementById("c");
ceButton = document.getElementById("ce");
resultButton = document.getElementById("result");

numbers.forEach((cV, i) => {
  let numberButton = numbers[i];
  numberButton.addEventListener("click", numberPress);
});
operations.forEach((cV, i) => {
  let operationButton = operations[i];
  operationButton.addEventListener("click", operationPress);
});

deciamlButton.addEventListener("click", deciamalButtonPress);
cButton.addEventListener("click", cButtonPress);
ceButton.addEventListener("click", ceButtonPress);
resultButton.addEventListener("click", resultButtonPress);

function numberPress() {
  console.log("number button click");
}

function operationPress() {
  console.log("operration button click");
}

function deciamalButtonPress() {
  console.log("deciamalButton click");
}

function cButtonPress() {
  console.log("cButton click");
}

function ceButtonPress() {
  console.log("ceButton click");
}

function resultButtonPress() {
  console.log("result click");
}
