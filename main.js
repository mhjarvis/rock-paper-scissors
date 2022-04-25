
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
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());