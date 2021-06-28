
console.log("Hello");


let currentNumber = 0;
let numberToChange = 0;
let mathsfunction = "";


//display new value of currentNumber
let display = () => {
    document.getElementById("answer").innerHTML = currentNumber;
}

// a fucntion to clear what is currently in the display and make it show a 0.
let clear = () => {
    document.getElementById("answer").innerHTML = 0;
    currentNumber= 0;
    numberToChange= 0;

    
}
//display function and equals
let equalsign = () => {
    mathsfunction=mathsfunction+currentNumber + "  =";
    document.getElementById("answer").innerHTML = (mathsfunction);
     
}
//places new number to right of current number and then shows it on the display
let addNumber = (num) => {
    num=num.toString();
    currentNumber= parseInt((currentNumber + num));
    display(); // invoke display function to get current number and show on the display
}

//convert currentnumber to plus or minus
let positiveToNegative = () => {
    currentNumber=(currentNumber * -1);
    display();
}

//decimals - used test to check for unwanted symbols but not working. 
let unwantedChars =  /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/

let dot = () => {
    if ( unwantedChars.test(currentNumber) == true) {
        currentNumber=currentNumber; 
    }
     else{
         currentNumber=(currentNumber + "." + numberToChange )
         display();
     }                                                 
    
}
//on pressing operators function to show + - etc,
 let funcButtonPress = (func) =>{
    numberToChange = currentNumber;
    currentNumber = "0";
     mathsfunction = func;
     display();
    document.getElementById("answer").innerHTML = numberToChange;
     document.getElementById("answer").innerHTML = mathsfunction;
 }

//if statements for = to sum the values inputed
let equals = () =>{

if (mathsfunction === "+") {
    equalsign();
    currentNumber=currentNumber+numberToChange;
    display();
} if (mathsfunction === "-") {
    equalsign();
    currentNumber=numberToChange-currentNumber;       
    display();
} if (mathsfunction === "*") {
    equalsign();
    currentNumber=(numberToChange * currentNumber);
    display();
}  if  (mathsfunction === "/") {
    equalsign();
    currentNumber=(numberToChange / currentNumber);
    display();
}  if (mathsfunction === "%") {
    equalsign();
    currentNumber=((numberToChange/100) * currentNumber);
    display();
}
} 

// }
//ID for buttons when pressed. (tried with value but couldnt get it to work :(.)
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
document.getElementById("plusminus").addEventListener("click", positiveToNegative );
document.getElementById("add").addEventListener("click", () => funcButtonPress("+") );
document.getElementById("minus").addEventListener("click", () => funcButtonPress("-") );
document.getElementById("multiply").addEventListener("click", () => funcButtonPress("*") );
document.getElementById("divide").addEventListener("click", () => funcButtonPress("/") );
document.getElementById("dot").addEventListener("click", dot );
document.getElementById("percent").addEventListener("click", () => funcButtonPress("%") );
document.getElementById("equals").addEventListener("click", equals );


