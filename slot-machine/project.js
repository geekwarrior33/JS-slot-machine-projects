// 1. Deposit money
// 2. How many lines the player gonna bet on
// 3. Collect the bet amount
// 4. Spin the slot machine
// 5. Check if the player won or lose
// 6. If the player win, we give him/her the winnings if not we check if he/she has enough money to play again
// 7. play again 

const prompt = require("prompt-sync")();

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8 
}

const SYMBOLS_VALUES = {
    A: 9,
    B: 6,
    C: 3,
    D: 0 
}





// 1. Deposit money
const deposit = () => {
    while(true){
        const depositAmount = prompt("Enter the deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount)
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again please.")
        } else {
            return numberDepositAmount
        }
    }
}

// 2. How many lines the player gonna bet on
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseFloat(lines)
        if(isNaN(numberOfLines) || numberOfLines < 1 || numberOfLines > 3){
            console.log("Invalid number of lines, try again please.")
        } else {
            return numberOfLines
        }
    }
}

// 3. Collect the bet amount
const getBet = (balance, lines) =>{
    while(true){
        const bet = prompt("Enter the balance to bet on per line: ")
        const numberBet = parseFloat(bet)
        if(isNaN(numberBet) || numberBet < 1 || numberBet > (balance / lines)){
            console.log("Invalid balance, try again please.")
        } else {
            return numberBet
        }
    }
}

const spin = () => {
    const symbols = []
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i=0; i<count; i++){
            symbols.push(symbol)
        }
    }
}


let balance = deposit()
console.log("You deposit: ", balance, "$" )

const lines = getNumberOfLines()
console.log("You are betting on ", lines, " lines")

const bet = getBet(balance, lines)
console.log("You are betting with", bet, "$ for ", lines, "lines." )