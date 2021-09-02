"Use strict";

//let pin = 1983;

//let balance = 625;

//module.exports.pin = pin

//module.exports.balance = balance

let accountInfo = require('./account');
const accountInfo = require ('prompt-sync')();



function getBalance(){    
    return accountInfo.balance;
}

function withDraw(balance, withDraw){
    accountBal = promptUser("How much would you like to take out?");
    accountInfo.balance = balance - withDraw;
    return accountInfo.balance;
}

function deposit(balance, deposit){
    accountDep = prompt("How much to deposit?");
    accountInfo.deposit = balance + deposit
    return accountInfo.deposit;
}

function validatePin(){
    userPin = prompt("Enter pin number")
    if(userPin === pin){
        if(userPin === accountInfo.pin)
        return true;
    }

}

module.exports.getBalance = getBalance
module.exports.withDraw = withDraw
module.exports.deposit = deposit
module.exports.validatePin = validatePin
console.log(module);

