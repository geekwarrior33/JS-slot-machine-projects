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

const SYMBOL_VALUES = {
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

// 4. Spin the slot machine
const spin = () => {

  const symbols = [];

  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol)
    }
  }

  const reels = [];

  for (let i = 0; i < COLS; i++) {
    
    reels.push([])
    const reelSymbols = [...symbols]

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length)
      const selectedSymbol = reelSymbols[randomIndex]
      reels[i].push(selectedSymbol)
      reelSymbols.splice(randomIndex, 1)
    }
  }

  return reels;
};

// 5. Check if the player won or lose
const transpose = (reels) => {
  
  const rows = []

  for (let i = 0; i < ROWS; i++) {
    rows.push([])
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i])
    }
  }

  return rows;
}

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
}

// 6. If the player win, we give him/her the winnings if not we check if he/she has enough money to play again
const getWinnings = (rows, bet, lines) => {
  
  let winnings = 0

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row]
    let allSame = true

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false
        break
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]]
    }
  }

  return winnings;
}

const game = () => {

  let balance = deposit()
  while (true) {
    console.log("You deposit: " + balance + "$" )

    const lines = getNumberOfLines()
    console.log("You are betting on " + lines + " lines")

    const bet = getBet(balance, lines)
    console.log("You are betting with $" + bet + " for " + lines + "lines." )

    balance -= bet * lines

    const reels = spin()

    const rows = transpose(reels)

    printRows(rows)
        
    const winnings = getWinnings(rows, bet, lines)
    balance += winnings
    console.log("You won, $" + winnings.toString())

    if (balance <= 0) {
      console.log("You ran out of money!")
      break
    }

    // 7. play again 
    const playAgain = prompt("Do you want to play again (y/n)? ")
    if (playAgain != "y") break
    }

}

game();