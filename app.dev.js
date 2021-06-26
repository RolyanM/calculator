"use strict";

console.log("Hello");
var currentNumber = "";
var numberToChange = "";
var mathsfunction = ""; //display new value of currentNumber

var display = function display() {
  document.getElementById("answer").innerHTML = currentNumber;
}; // a fucntion to clear what is currently in the display and make it show a 0.


var clear = function clear() {
  document.getElementById("answer").innerHTML = 0;
  currentNumber = "";
  numberToChange = "";
}; //display function and equals on middle row


var equalsign = function equalsign() {
  mathsfunction = mathsfunction + currentNumber + "  =";
  document.getElementById("answer").innerHTML = mathsfunction;
}; //places new number to right of current number and then shows it on the display


var addNumber = function addNumber(num) {
  num = num.toString();
  currentNumber = parseInt(currentNumber + num);
  display(); // invoke display function to get current number and show on the display
}; //convert currentnumber to plus or minus


var positiveNegativeSwitch = function positiveNegativeSwitch() {
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
}; //on pressing operators, do some stuff


var funcButtonPress = function funcButtonPress(func) {
  numberToChange = currentNumber;
  currentNumber = "0";
  mathsfunction = func;
  display();
  document.getElementById("answer").innerHTML = numberToChange;
  document.getElementById("answer").innerHTML = mathsfunction;
}; //switch statement for = to sum the values inputed


var equals = function equals() {
  switch (mathsfunction) {
    case "+":
      equalsign();
      currentNumber = currentNumber + numberToChange;
      display();
      break;

    case "-":
      equalsign();
      currentNumber = numberToChange - currentNumber;
      display();
      break;

    case "*":
      equalsign();
      currentNumber = numberToChange * currentNumber;
      display();
      break;

    case "/":
      equalsign();
      currentNumber = numberToChange / currentNumber;
      display();
      break;

    case "%":
      equalsign();
      currentNumber = numberToChange / 100 * currentNumber;
      display();
      break;
  }
}; //ID for buttons when pressed. (tried with value but couldnt get it to work :(.)


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
document.getElementById("plusminus").addEventListener("click", positiveNegativeSwitch);
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
document.getElementById("equals").addEventListener("click", equals); // //display
// // var for the display at the top where button values will be printed.
// const display = document.querySelector(".display");
// // buttons 
// //var for buttons using Q-S-A to select all buttons
// const buttons = document.querySelectorAll('button');
// //function to make the clicked buttons appear in the display.
// let answer = (e) => {
//   const clickedButton = e.target.innerHTML;
//   console.log(clickedButton);
//   if (clickedButton === '=') { //if pressed button === value "=" display the answer.
//     if (display.value !== '') {
//       currentNumber = display.innerHTML //need to turn the string to a number and sum it.
//       console.log(currentNumber);
//     }
//     else if (funcButtonPress) {
//     }
//   } else if (clickedButton === 'C') {   //clear the display
//     display.value = '';
//   } else {   // display clicked button (this only works if it is at the else)
//     display.value += clickedButton;
//   }
// };
// // operators 
// const funcButtonPress = (func) => {
//   numberToChange = currentNumber;
//   currentNumber = "0";
//   mathsfunction = func;
//   display()
//   document.getElementById("numbertochange").innerHTML = numberToChange;
//   document.getElementById("mathsfunction").innerHTML = mathsfunction;
// }
// let answer2 = (e) => {
//   const clickedButton = e.target.value;
// // take the display number 
// //covert to numbers 
// // calculate
// // return number 
//   if (clickedButton === '=' || display.value != '') {
//   display.value = parseFloat(display.value);
// } 
//   }
// //  
//function to make the clicked buttons appear in the display.
//  
// //event listener for the buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', answer, answer2);
// })
// // i think i need to add the var answer to this so they go to the display. I had to move this to the bottom as needs to go after the function above to have answer called
//  //const equals = () =>{
// //   switch(mathsOperator){
// //     case "+" :
// //     equalsign()
// //     displayNumber=displayNumber+numberToChange;
// //     display()
// //     break;
// //     case "-" :
// //     equalsign()
// //     displayNumber=numberToChange-displayNumber;
// //     display()
// //     break;
// //     case "*" :
// //     equalsign()
// //     displayNumber=(numberToChange * displayNumber);
// //     display()
// //     break;
// //     case "/" :
// //     equalsign()
// //     displayNumber=(numberToChange / displayNumber);
// //     display()
// //     break;
// //     case "%" :
// //     equalsign()
// //     displayNumber=((numberToChange/100) * displayNumber);
// //     display()
// //     break;
// // }
// // }