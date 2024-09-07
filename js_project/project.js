/*
 Learn JavaScript With This ONE Project!
 https://www.youtube.com/watch?v=E3XxeE7NF30
Tech With Tim
*/

const prompt = require("prompt-sync")();



//1. Deposit Money
const deposit = () =>{
    while (true){
        const depositedAmount = parseFloat(prompt("Deposit an amount: "));
        if (isNaN(depositedAmount) || depositedAmount <= 0){
            console.log("Please enter a valid amount where it's greater than 0");
        }else {
            return depositedAmount;
        }
    }
}

//2.determine number of lines to bet on
const getNumberOfLines = () => {
    while (true){
        const numberOfLines = parseInt(prompt("Enter number of lines to bet on: "));
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Please enter a valid amount where it's greater than 0 and less than or equal 3");
        }else {
            return numberOfLines;
        }
    }

}

//3. Collect a bet amount
const getBet = (balance, lines) => {
    while (true){
        const betAmount = parseInt(prompt("Enter your bet per line: "));
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > (balance / lines) ){
            console.log("Invalid bet");
        }else {
            return betAmount;
        }
    }


} 

//4.spin the slot machine
const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }

    }
    //each nested array acts as a column [A, A, A] 
    const reels = [];
    for(let i = 0; i < COLS; i++){
        reels.push([]);
        //a copy of reel symbols in order to remove them in case they're taken but with keeping the original symbols array for the next iteration
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            //round the number to the nearest whole number, random generates a number between 0 and max 1 which will gives us at max the length of the reelSymbols array
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); 
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
            // console.log(reelSymbols);
        }
    }
    return reels;
}

const transpose = (reels) => {
    /* if we have array like [[A B C], [D D D], [A A A]]
    the rows will be like
    ==> A D A 
    ==> B D A
    ==> C D A
    so it's like fixing column and moving on the rows
    */
    const rows = [];
    for (let i = 0; i < ROWS; i++){
        rows.push([]);
        for (let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);

        }
    }
    return rows;

}

const printRows = (rows) => {
    //items iterating
    for (const row of rows){
        let rowString = "";
        for (const [i, symbol] of row.entries()){
            rowString += symbol;
            if (i != row.length -1){
                rowString += " | "
            }
        }
        console.log(rowString);


    }
}


//5. check if the user won
const getWinings = (rows, bet, lines) => {
    let result = 0, hasSameSymbol = true;
    for (let row = 0; row < lines; row++){
        const symbols = rows[row];

        for (const symbol of symbols){
            if (symbol != symbols[0]){
                hasSameSymbol = false;
                break;
            }
        }
    }
    if (hasSameSymbol){
        result += bet * SYMBOL_VALUES[symbols[0]];
    }

    return result;
} 

//6.give the user their winning

//7.play again
let balance = deposit(); 
let playAgain = 'y';
const game = () => {
    while (true && balance > 0 && playAgain == 'y'){
        console.log(`you have balance of $${balance}`);
        const numberOfLines = getNumberOfLines(); 
        const betAmount = getBet(balance, numberOfLines);
        balance -= (betAmount * numberOfLines);
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winings = getWinings(rows, betAmount, numberOfLines);
        balance += winings;
        console.log(`you won ${winings}`);
        playAgain = prompt("Do you want to play again ? (y/n) ");
    }

}

game();
