
console.log("Hello");

let mathsOperator = "";
let displayNumber = "";
let changeNumber = "";
//display


// var for the display at the top where button values will be printed.

const display = document.querySelector(".display");





// buttons 

//var for buttons using Q-S-A to select all buttons
const buttons = document.querySelectorAll('button');


//function to make the clicked buttons appear in the display.

let answer = (e) => {
  const clickedButton = e.target.value;

  if (clickedButton === '=') { //if pressed button === value "=" display the answer.
      
    if (display.value !== '') {
      
      display.value = parseFloat(display.value).sum(display.value);
    }
  } else if (clickedButton === 'C') {
    
    display.value = '';
  } else {
    
    display.value += clickedButton;
  }
};

















let answer2 = (e) => {
  const clickedButton = e.target.value;

// take the display number 


//covert to numbers 


// calculate


// return number 


  if (clickedButton === '=' || display.value != '') {
      
  display.value = parseFloat(display.value);
} 

  }

//  


//function to make the clicked buttons appear in the display.



//  
//event listener for the buttons
buttons.forEach((button) => {
  button.addEventListener('click', answer, answer2);
})
// i think i need to add the var answer to this so they go to the display. I had to move this to the bottom as needs to go after the function above to have answer called


 //const equals = () =>{
//   switch(mathsOperator){

//     case "+" :
//     equalsign()
//     displayNumber=displayNumber+numberToChange;
//     display()
//     break;

//     case "-" :
//     equalsign()
//     displayNumber=numberToChange-displayNumber;
//     display()
//     break;

//     case "*" :
//     equalsign()
//     displayNumber=(numberToChange * displayNumber);
//     display()
//     break;

//     case "/" :
//     equalsign()
//     displayNumber=(numberToChange / displayNumber);
//     display()
//     break;

//     case "%" :
//     equalsign()
//     displayNumber=((numberToChange/100) * displayNumber);
//     display()
//     break;

    
// }
// }
