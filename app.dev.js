"use strict";

var output = document.querySelector(".calc__output");
var allClear = document.querySelector(".ac");
var plusMinus = document.querySelector(".plusminus");
var percentage = document.querySelector(".percentage");
var divide = document.querySelector(".divide");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var multiply = document.querySelector(".multiply");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var minus = document.querySelector(".minus");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var plus = document.querySelector(".plus");
var zero = document.querySelector(".zero");
var dot = document.querySelector(".dot");
var equals = document.querySelector(".equals");
var numbers = document.querySelectorAll(".numbers");
var operators = document.querySelectorAll(".operators");
var operatorsDm = document.querySelectorAll(".operatorsDm");
var plusminus = document.querySelector(".plusminus");
var percent = document.querySelector(".percentage");
var outputString = "";
var totalFormula = "";
var reset = allClear.addEventListener("click", function () {
  outputString = "0";
  output.style.fontSize = "68pt";
  console.clear();
  handleUpdateOutput();
});
var equalsClick = equals.addEventListener("click", function (e) {
  handleEqualsEvent(e);
});
numbers.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleClickEventListener(e);
  });
});
operators.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleOperatorEvent(e);
  });
});
operatorsDm.forEach(function (button) {
  button.addEventListener("click", function (e) {
    handleOperatorsDmEvent(e);
  });
});
dot.addEventListener("click", function () {
  var splitOutput = output.innerHTML.split("");

  if (splitOutput[splitOutput.length - 2] == ".") {
    output.innerHTML = "NaN";
  } else {
    "".concat(outputString, " + ").concat(dot);
  }
});
percent.addEventListener("click", function (e) {
  var buttonPressed = e.target.innerHTML;
  outputString = "".concat(outputString);

  if (buttonPressed === "%") {
    outputString = "".concat(outputString, " / 100");
    var result = new Function("return " + outputString)();
    output.innerHTML = result;
  }
});
plusminus.addEventListener("click", function (e) {
  var buttonPressed = e.target.innerHTML;
  outputString = "".concat(outputString);

  if (buttonPressed === "+/-" && outputString > 0) {
    outputString = "-".concat(outputString);
    output.innerHTML = outputString;
    console.log(outputString);
  } else if (buttonPressed === "+/-" && outputString < 0) {
    outputString = outputString * -1;
    output.innerHTML = outputString;
  }
});

var handleClickEventListener = function handleClickEventListener(e) {
  var buttonPressed = e.target.innerHTML;

  if (outputString === "0") {
    outputString = buttonPressed;
  } else {
    outputString = "".concat(outputString).concat(buttonPressed);
  }

  console.log(outputString);
  handleUpdateOutput();
};

var handleOperatorEvent = function handleOperatorEvent(e) {
  var buttonPressed = e.target.innerHTML;
  outputString = "".concat(outputString, " ").concat(buttonPressed, " ");
  console.log(outputString);
};

var handleUpdateOutput = function handleUpdateOutput() {
  if (outputString.length > 7) {
    output.style.fontSize = "30pt";
  }

  output.innerHTML = outputString;
};

var handleEqualsEvent = function handleEqualsEvent(e) {
  var result = new Function("return " + outputString)();
  output.innerHTML = result;
  outputString = result;

  if (result.length > 7) {
    output.style.fontSize = "30pt";
  } else {
    output.style.fontSize = "68pt";
  }
};

var handleOperatorsDmEvent = function handleOperatorsDmEvent(e) {
  var buttonPressed = e.target.innerHTML;
  var newMultiply = "*";
  var newDivide = "/";

  if (buttonPressed === "x") {
    outputString = "".concat(outputString, " ").concat(newMultiply, " ");
  } else if (buttonPressed === "÷") {
    outputString = "".concat(outputString, " ").concat(newDivide, " ");
  }
};