# Slot Machine Game

## Overview
This is a simple **slot machine game** implemented in JavaScript. The game allows users to deposit money, place bets on a customizable number of lines, spin the reels, and win based on matching symbols. It includes dynamic reel generation and a winnings calculation based on the symbols' values.

## Features
- Allows user deposits to fund their gameplay.
- Players can bet on 1 to 3 lines.
- Dynamic symbol allocation based on frequency.
- Randomized reel spinning with a fair distribution of symbols.
- Winnings are calculated based on matching rows and the value of the winning symbols.
- Provides an interactive console-based gaming experience.

---

## How to Run

### Prerequisites
- Node.js installed on your system.

### Steps to Execute
1. Clone the repository or download the code.
2. Navigate to the project directory.
3. Install the `prompt-sync` package by running:

   ```bash
   npm install prompt-sync
   ```
   
5. Run the program with:
   
   ```bash
   node <your-filename>.js
   ```

---

## Game Flow
1. **Deposit Money**:
   - The game starts by asking the user to deposit money.
2. **Choose Number of Lines**:
   - Players choose how many lines (1 to 3) they want to bet on.
3. **Place Bet Per Line**:
   - Players enter the amount they want to bet per line.
   - The total bet is `bet per line * number of lines`. The game ensures the user has enough balance.
4. **Spin the Reels**:
   - The reels spin and display the result.
5. **Calculate Winnings**:
   - If all symbols in a row match, the player wins based on the symbol's value.
6. **Play Again or Exit**:
   - Players can continue as long as they have a positive balance or choose to exit the game.

---

## Code Breakdown

### Constants
- `ROWS` and `COLS`: Define the grid size (3x3).
- `SYMBOLS_COUNT`: Defines the frequency of symbols.
- `SYMBOL_VALUES`: Assigns monetary values to symbols.

### Functions
- **`deposit`**: Prompts the user to deposit money and validates the input.
- **`getNumberOfLines`**: Prompts the user to choose how many lines to bet on.
- **`getBet`**: Ensures the bet per line is valid and within the user's balance.
- **`spin`**: Randomly generates the reels for the slot machine.
- **`transpose`**: Converts reels into rows for easier winnings calculation.
- **`printRows`**: Displays the result of the spin in a readable format.
- **`getWinnings`**: Calculates winnings based on matching rows and bet amount.
- **`game`**: Main function handling the game loop.

---

## Example
### Input:
1. Deposit $50.
2. Bet $5 on 3 lines.
3. Spin the reels.

### Output:
```
A | B | C
A | A | A  <-- Winning line
B | C | D
You won, $15
You have a balance of $60
Do you want to play again (y/n)?
```

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you wish.

