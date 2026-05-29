/**** IMPLICIT CONVERSION (TYPE COERCION) ****/

/** EXAMPLE 1 - CONCATENATION **/

let sectorText = "Sector";
let sectorNumber = 7;

// DEMO: Concatenate the two variables above and store in a
// new variable; print it and its type to the console.

let sectorName = sectorText + " " + sectorNumber;
console.log(sectorName);
console.log(`sectorName type is a ${typeof sectorName}.`);
console.log(`sectorText type is a ${typeof sectorText}.`);
console.log(`sectorNumber type is a ${typeof sectorNumber}.`);

//branch test comment - ignore this

/** EXAMPLE 2 - ARITHMETIC **/

let totalDistanceKm = "1000";
let distanceTraveledKm = 400;
let oxygenLevel = "60";

// DEMO: Calculate the remaining distance and store in a
// new variable; print it and its type to the console.

let remainingDistance = totalDistanceKm - distanceTraveledKm;
console.log(`The remaining distance is ${remainingDistance}Km.`)
console.log(`The string type of the variable remainingDistance is a ${typeof remainingDistance}.`)


// DEMO: Double the oxygen level and store in a
// new variable; print it and its type to the console.

let increasedOxygen = oxygenLevel * 2;
console.log(increasedOxygen);

/** EXAMPLE 3 - ANTICIPATING ERRORS WITH TYPE COERCION **/

let totalCargoMass = "12000 kg";
let numberOfCargoHolds = 3;

// DEMO: Calculate the average mass per hold and store in a
// new variable; print it to the console to see the result.

//let averageHoldMass = totalCargoMass / numberOfCargoHolds;
//console.log(`The average mass of ${numberOfCargoHolds} is ${averageHoldMass}`);

// DEMO: Use explicit conversion as needed to complete the mathematical
// calculation, then use implicit conversion to add ' kg' to the result.
// Print the final result and its type to the console.

let averageHoldMass = parseInt(totalCargoMass) / numberOfCargoHolds;
console.log(`The average mass of the currently loaded cargo holds(${numberOfCargoHolds}) is ${averageHoldMass}kg`);

averageHoldMass = averageHoldMass + "kg";
console.log(averageHoldMass);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
