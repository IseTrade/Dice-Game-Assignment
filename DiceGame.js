let numberOfSides;
numberOfSides = prompt ("Please Enter Number of Sides for your die");

function rollDie (numberOfSides) {
    let roll = Math.floor (Math.random () * numberOfSides) + 1;
    return roll;
}

console.log (rollDie(numberOfSides));
