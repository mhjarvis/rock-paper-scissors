(function() {                           //welcome function/prompt to start game

    console.log("Welcome to Tic-Tac-Toe");
    console.log(".......................");
    
    let answer = false;

    while(answer == false) {
        let playerChoice = prompt("Pick one - Rock, Paper, or Scissors: ");
        playerChoice = playerChoice.toUpperCase();
        console.log(playerChoice);

        if(playerChoice == "ROCK" || playerChoice == "PAPER" || playerChoice == "SCISSORS") {
            answer = true;
            return playerChoice;
        }
    }
    

})();


function computerPlay () {              //function randomly picks and returns computers value
    
    let randomNum = Math.floor(Math.random() * 3 + 1);
    
    if(randomNum == 1) {
        return "Rock";
    }
    if(randomNum == 2) {
        return "Paper";
    }
    if(randomNum == 3) {
        return "Scissors";
    }
}


console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());