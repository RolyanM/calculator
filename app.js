
console.log("Hello");

//display


// var for the display at the top where button values will be printed.

const display = document.querySelector(".display");





// buttons 

//var for buttons using Q-S-A to select all buttons
const buttons = document.querySelectorAll('button');


//function to make the clicked buttons appear in the display.

let answer = (e) => {
  const clickedButton = e.target.value;

if (clickedButton === 'C') {  // clears on click and returns empty string.
  display.value = '';
}
else {
      
  display.value += clickedButton;  //adds the clicked button to the current display value 
} 


}

let answer2 = (e) => {
  const clickedButton = e.target.value;

  if (clickedButton === '=' || display.value !== '') {
      
  display.value = ParseFloat(display.value);
} 

  }

//  //if pressed button === value "=" display the answer.


//function to make the clicked buttons appear in the display.



//  
//event listener for the buttons
buttons.forEach((button) => {
  button.addEventListener('click', answer, answer2);
})
// i think i need to add the var answer to this so they go to the display. I had to move this to the bottom as needs to go after the function above to have answer called