"Use strict";

console.log('Hello World!');

let atmFile = require('./atm');
console.log(atmFile);

while(!validatePin){
    console.log("Wrong pin, Please! try again.")
}

let option = prompt("Make a selection")
switch(option){
    case '1':
        atmFile.getBalance
        break;
    case '2':
        atmFile.withDraw
        break;
    case '3':
        atmFile.deposit
        break;
    default:
        console.log("Invalid, please try again.")
}
