"Use strict";

//var accountBal = 625;

//console.log("Your balance is 625 dollars");

//var accountPinNum = 1983;

//console.log("Your pin number is 1983");


let pin = 1983;

let balance = 625;

module.exports.pin = pin;

module.exports.balance = balance;

const {multiply} = require('./calculate');
console.log(multiply);

var result = multiply(25, 25);
console.log(result);