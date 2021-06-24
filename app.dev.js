"use strict";

console.log("Hello"); //display
// var for the display at the top where button values will be printed.

var display = document.querySelector(".display"); // buttons 
//var for buttons using Q-S-A to select all buttons

var buttons = document.querySelectorAll('button'); //function to make the clicked buttons appear in the display.

var answer = function answer(e) {
  var clickedButton = e.target.value;

  if (clickedButton === 'C') {
    // clears on click and returns empty string.
    display.value = '';
  } else {
    display.value += clickedButton; //adds the clicked button to the current display value 
  }
}; //  //if pressed button === value "=" display the answer.
//function to make the clicked buttons appear in the display.
// let answer = (e) => {
//   const buttonClicked = e.target.value;
//   if (display.value += buttonClicked.value) {
//    } else if (buttonClicked === '=') {
//      display.value = eval(display.value);
//    } else if (display.value !== '') {
//      display.value = eval(display.value);
// // // if button "C" is pressed return to normal
//  } else if (clickedButtonValue === 'C') {
//        display.value = '';
//  
//event listener for the buttons


buttons.forEach(function (button) {
  button.addEventListener('click', answer);
}); // i think i need to add the var answer to this so they go to the display. I had to move this to the bottom as needs to go after the function above to have answer called