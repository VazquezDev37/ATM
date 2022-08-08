"Use strict";

let {pin, balance} = require('./account');


function validatePin(pinNumber) {
    if (pinNumber === pin) {
        return true;
    } else {
        return false;
    }
}

function getBalance() {
    return balance;
}


function withdraw(amount) {
    if(balance === 0){
        return `You have insufficient funds.`
    }else if (amount > balance) {
        return `Can't withdraw`
    } else {

        let new_balance = balance - amount;

        return newBalance(new_balance)
    }
}


function newBalance(amount) {
    balance = amount;
    return `Your New Balance ${balance}`;
}


function deposit(amount) {
    let new_balance = balance + amount;

    return newBalance(new_balance);
}


module.exports = {
    validate: validatePin,
    balance: getBalance,
    withdraw: withdraw,
    deposit: deposit,
}