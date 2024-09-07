const prompt = require("prompt-sync")();

const enterNumber = () => {
    return new Promise((resolve, reject) => {
        const userNumber = Number(prompt('Enter number from 1 to 6: '));
        const randomNumber = Math.floor(Math.random() * 6 + 1); 
        if(isNaN(userNumber)){
            reject(new Error("Wrong input type"));
        }
        
        if(userNumber == randomNumber) {
            resolve({
                points: 2,
                randomNumber
            });
        }else if(userNumber === randomNumber - 1 ||  userNumber === randomNumber + 1){
            resolve({
                points:0,
                randomNumber
            })
        }else{
            resolve({
                points:0,
                randomNumber
            })
        }

    });
}

const continueGame = () => {
    return new Promise((resolve) => {
        if (prompt("Pres any key to continue")){
            resolve(true);
        }else{
            resolve(false);
        }

    });
}

const handleGuess = () => {
    enterNumber().then((result) => {
        console.log(`Dice: ${result.randomNumber}: you got ${result.points} points`);
    }).catch((error)=>console.log(error));
    continueGame().then((result)=>{
        if(result){
            handleGuess();
        }else {
            console.log("END OF GAME");
        }

    }).catch((error)=>console.log(error));

    }


const handleGuessAsync = async () => {
    try{
        const result = await enterNumber();
        console.log(`Dice: ${result.randomNumber}: you got ${result.points} points`);

        const isContinue = await continueGame();
        if(isContinue){
            handleGuessAsync();
        }else{
            console.log('END OF GAME');
        }


    }catch(e){
        console.log(e);
    }
};

// handleGuess();
//await before function instead of the then method where result is passed as a promise object
//try, catch instead of catch method
handleGuessAsync();


// (async () => {
//     try {
//       const result = await enterNumber();
//       console.log(result);
//     } catch (e) {
//       console.log(e);
//     }
//   })();