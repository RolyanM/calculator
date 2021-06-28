"use strict";

console.log("Hello");
var currentNumber = 0;
var numberToChange = 0;
var mathsfunction = ""; //display new value of currentNumber

var display = function display() {
  document.getElementById("answer").innerHTML = currentNumber;
}; // a fucntion to clear what is currently in the display and make it show a 0.


var clear = function clear() {
  document.getElementById("answer").innerHTML = 0;
  currentNumber = 0;
  numberToChange = 0;
}; //display function and equals


var equalsign = function equalsign() {
  mathsfunction = mathsfunction + currentNumber + "  =";
  document.getElementById("answer").innerHTML = mathsfunction;
}; //places new number to right of current number and then shows it on the display


var addNumber = function addNumber(num) {
  num = num.toString();
  currentNumber = parseInt(currentNumber + num);
  display(); // invoke display function to get current number and show on the display
}; //convert currentnumber to plus or minus


var positiveToNegative = function positiveToNegative() {
  currentNumber = currentNumber * -1;
  display();
}; //decimals - used test to check for unwanted symbols but not working. 


var unwantedChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;

var dot = function dot() {
  if (unwantedChars.test(currentNumber) == true) {
    currentNumber = currentNumber;
  } else {
    currentNumber = currentNumber + "." + numberToChange;
    display();
  }
}; //on pressing operators function to show + - etc,


var funcButtonPress = function funcButtonPress(func) {
  numberToChange = currentNumber;
  currentNumber = "0";
  mathsfunction = func;
  display();
  document.getElementById("answer").innerHTML = numberToChange;
  document.getElementById("answer").innerHTML = mathsfunction;
}; //if statements for = to sum the values inputed


var equals = function equals() {
  if (mathsfunction === "+") {
    equalsign();
    currentNumber = currentNumber + numberToChange;
    display();
  }

  if (mathsfunction === "-") {
    equalsign();
    currentNumber = numberToChange - currentNumber;
    display();
  }

  if (mathsfunction === "*") {
    equalsign();
    currentNumber = numberToChange * currentNumber;
    display();
  }

  if (mathsfunction === "/") {
    equalsign();
    currentNumber = numberToChange / currentNumber;
    display();
  }

  if (mathsfunction === "%") {
    equalsign();
    currentNumber = numberToChange / 100 * currentNumber;
    display();
  }
}; // }
//ID for buttons when pressed. (tried with value but couldnt get it to work :(.)


document.getElementById("clear").addEventListener("click", clear);
document.getElementById("one").addEventListener("click", function () {
  return addNumber(1);
});
document.getElementById("two").addEventListener("click", function () {
  return addNumber(2);
});
document.getElementById("three").addEventListener("click", function () {
  return addNumber(3);
});
document.getElementById("four").addEventListener("click", function () {
  return addNumber(4);
});
document.getElementById("five").addEventListener("click", function () {
  return addNumber(5);
});
document.getElementById("six").addEventListener("click", function () {
  return addNumber(6);
});
document.getElementById("seven").addEventListener("click", function () {
  return addNumber(7);
});
document.getElementById("eight").addEventListener("click", function () {
  return addNumber(8);
});
document.getElementById("nine").addEventListener("click", function () {
  return addNumber(9);
});
document.getElementById("zero").addEventListener("click", function () {
  return addNumber(0);
});
document.getElementById("plusminus").addEventListener("click", positiveToNegative);
document.getElementById("add").addEventListener("click", function () {
  return funcButtonPress("+");
});
document.getElementById("minus").addEventListener("click", function () {
  return funcButtonPress("-");
});
document.getElementById("multiply").addEventListener("click", function () {
  return funcButtonPress("*");
});
document.getElementById("divide").addEventListener("click", function () {
  return funcButtonPress("/");
});
document.getElementById("dot").addEventListener("click", dot);
document.getElementById("percent").addEventListener("click", function () {
  return funcButtonPress("%");
});
document.getElementById("equals").addEventListener("click", equals);