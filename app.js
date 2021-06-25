
console.log("Hello");


let currentNumber = "";
let numberToChange = "";
let mathsfunction = "";


//display new value of currentNumber
let display = () => {
    document.getElementById("answer").innerHTML = currentNumber;
}

//clear calc
let clear = () => {
    document.getElementById("answer").innerHTML = 0;
    currentNumber=""
    numberToChange=""

    
}
//display function and equals on middle row
let equalsign = () => {
    mathsfunction=mathsfunction+currentNumber +"  =";
    document.getElementById("answer").innerHTML = (mathsfunction);
     
}
//places new number to right of current number
let addNumber = (num) => {
    num=num.toString();
    currentNumber= parseInt((currentNumber + num),10);
    display()
}

//convert currentnumber to plus or minus
let positiveNegativeSwitch = () => {
    currentNumber=(currentNumber * -1);
    display()
}

//decimals
let dot = () => {
    if ( /\d*\.{1,}/.test(currentNumber) == true) {
        currentNumber=currentNumber;
    }
    else{
        currentNumber=(currentNumber+".")
        display()
    }                                                 
    
}
//on pressing operators, do some stuff
let funcButtonPress = (func) =>{
    numberToChange = currentNumber;
    currentNumber = "0";
    mathsfunction = func;
    display()
    document.getElementById("answer").innerHTML = numberToChange;
    document.getElementById("answer").innerHTML = mathsfunction;
}

//pressing equals does some stuff
let equals = () =>{
    switch(mathsfunction){

        case "+" :
        equalsign()
        currentNumber=currentNumber+numberToChange;
        display()
        break;

        case "-" :
        equalsign()
        currentNumber=numberToChange-currentNumber;
        display()
        break;

        case "*" :
        equalsign()
        currentNumber=(numberToChange * currentNumber);
        display()
        break;

        case "/" :
        equalsign()
        currentNumber=(numberToChange / currentNumber);
        display()
        break;

        case "%" :
        equalsign()
        currentNumber=((numberToChange/100) * currentNumber);
        display()
        break;

        
    }

}
//what functions load when buttons are pressed
document.getElementById("clear").addEventListener("click", clear );
document.getElementById("one").addEventListener("click", () =>  addNumber(1) );
document.getElementById("two").addEventListener("click", () => addNumber(2) );
document.getElementById("three").addEventListener("click", () => addNumber(3) );
document.getElementById("four").addEventListener("click",() => addNumber(4) );
document.getElementById("five").addEventListener("click",() => addNumber(5) );
document.getElementById("six").addEventListener("click",() => addNumber(6) );
document.getElementById("seven").addEventListener("click",() => addNumber(7) );
document.getElementById("eight").addEventListener("click",() => addNumber(8) );
document.getElementById("nine").addEventListener("click",() => addNumber(9) );
document.getElementById("zero").addEventListener("click",() => addNumber(0) );
document.getElementById("plusminus").addEventListener("click", positiveNegativeSwitch );
document.getElementById("add").addEventListener("click", () => funcButtonPress("+") );
document.getElementById("minus").addEventListener("click", () => funcButtonPress("-") );
document.getElementById("multiply").addEventListener("click", () => funcButtonPress("*") );
document.getElementById("divide").addEventListener("click", () => funcButtonPress("/") );
document.getElementById("dot").addEventListener("click", dot );
document.getElementById("percent").addEventListener("click", () => funcButtonPress("%") );
document.getElementById("equals").addEventListener("click", equals );






// //display


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
