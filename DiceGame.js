// Game premise:
// The program will randomly pick a number between 50 and 100 and present to player.
// The player can choose to roll any of the dice, either 6, 8, 10, 12 or 20. 
// The result of the roll is subtracted from the initial chosen number.
// If the result ends up to be 0, then the player "wins" the game.
// If it's less than 0, then he "loses" the game...

let numberOfSides;
let initialRandomNumber = Math.floor (Math.random() * 100) + 50;
let gameNumber = initialRandomNumber;
numberOfSides = prompt ("Please Enter Number of Sides for your die");

function rollDie (numberOfSides) {
    let roll = Math.floor (Math.random () * numberOfSides) + 1;
    return roll;
}


let roll = rollDie (numberOfSides);

console.log (roll);

