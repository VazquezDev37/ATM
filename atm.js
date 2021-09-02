"Use strict";

//let pin = 1983;

//let balance = 625;

//module.exports.pin = pin

//module.exports.balance = balance

let accountInfo = require('./account');
const account = require ('prompt-sync')();



function getBalance(){    
    return account.balance;
}

function withDraw(balance, withDraw){
    accountBal = promptUser("How much would you like to take out?");
    account.balance = balance - withDraw;
    return account.balance;
}

function deposit(balance, deposit){
    accountDep = prompt("How much to deposit?");
    account.deposit = balance + deposit
    return account.deposit;
}

function validatePin(){
    userPin = prompt("Enter pin number")
    if(userPin === pin){
        return true;
    }

}

module.exports.getBalance = getBalance
module.exports.withDraw = withDraw
module.exports.deposit = deposit
module.exports.validatePin = validatePin
console.log(module);

