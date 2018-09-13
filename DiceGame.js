// Game premise:
// The program will randomly pick a number between 50 and 100 and present to player.
// The player can choose to roll any of the dice, either 4, 6, 8, 10, 12 or 20. 
// If number entered is none of the above, player will be re-prompted. 
// The result of the roll is subtracted from the initial chosen number.
// If result is > 0, then he's prompted to roll another die.
// If the result ends up to be 0, then the player "wins" the game.
// If it's less than 0, then he "loses" the game...

// Call one Main function for the entire game.
playDiceGame();

// Get input from user but limit choices to 4, 6, 8, 10, 12, and 20 faced die. 
function getInput() {
    let isValid = false;
    while(!isValid){
        let input = prompt("Please pick your die, either 4, 6, 8, 10, 12 or 20 : ");
        if(input === "4" || input === "6" || input === "8" || input === "10" || input === "12" || input === "20"){
            isValid = true;
            return input;
        }
        else { 
            colorLog ("          PLEASE ENTER THE CORRECT DIE", "invalidnumber");
        }
    }
 }

 // Function to return roll of die result.
 function rollDie (sidesOfDie) {       
    let roll = Math.floor (Math.random () * sidesOfDie) + 1;
    console.log ("    Die roll : " + roll);       
    return roll;
}

// This is the main game loop.
function playDiceGame () {
    let numberToBeat = Math.floor (Math.random() * 50) + 50;
    let count = 0;
    while (numberToBeat > 0)  { 
        colorLog ("Number to Beat : " + numberToBeat, "beatnumber");
        count++;
        let numberOfSides; 
        numberOfSides = getInput();
        colorLog ("    " + numberOfSides + " sided die was used", "roll die");
        numberToBeat -= rollDie (numberOfSides);
    }
    winOrLose (numberToBeat, count);
}

// Announces the result of the game.
function winOrLose (numberToBeat, count) {
    if (numberToBeat < 0) {
        colorLog ("        Sorry, you lose after " + count + " tries...", "lose");
    }
    else {
    colorLog ("        Congrats, you WIN " + "in " + count + " tries!!!", "win");
    }
}  

// Add colors to various text inputs and outputs to make things more legible.
// Found this on the net and adapted for my use.  All credits go to code creator. 
function colorLog(message, color) {
    
    color = color || "black";

    switch (color) {
        case "win":  
             color = "Gold";
             break;
        case "lose":   
             color = "Red";
             break;
        case "roll die":  
             color = "Blue";
             break;
        case "beatnumber":  
             color = "FireBrick";
             break;
        case "invalidnumber":  
             color = "Crimson";
             break;
        default: 
             color = color;
    }

    console.log("%c" + message, "color:" + color);
}