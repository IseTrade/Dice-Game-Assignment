// Game premise:
// The program will randomly pick a number between 50 and 100 and present to player.
// The player can choose to roll any of the dice, either 6, 8, 10, 12 or 20. 
// The result of the roll is subtracted from the initial chosen number.
// If the result ends up to be 0, then the player "wins" the game.
// If it's less than 0, then he "loses" the game...

let numberToBeat = Math.floor (Math.random() * 50) + 50;

while (numberToBeat > 0)  { 
    console.log ("Number to Beat : " + numberToBeat);
    let numberOfSides;
    numberOfSides = prompt ("Please Enter Number of Sides for your die");
    console.log (numberOfSides + " sided die was used");
    rollDie (numberOfSides);
    function rollDie (sidesOfDie) {       
        let roll = Math.floor (Math.random () * sidesOfDie) + 1;
        console.log ("Die roll : " + roll);       
        return numberToBeat -= roll;
    }
}

if (numberToBeat < 0) {
    console.log ("Sorry, you lose.");
}
else {
    console.log ("Congrats, you WIN!!!");
    console.log (numberToBeat);
}


// console.log (numberToBeat);
// console.log (roll);

