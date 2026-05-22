/**** CONSTANTS ****/

/** EXAMPLE 1 - THE IMMUTABILITY RULE **/

const MISSION_NAME = "Ares V";

// DEMO: Un-comment the line below and run the code to see what happens.
//MISSION_NAME = "Ares VI";

/** EXAMPLE 2 - SCREAMING_SNAKE_CASE USES **/

// DEMO: Define some physics and math constants.
//constants are in metric
const SPEED_OF_LIGHT = 299792.458;
console.log(`The speed of light in a vacuum is ${SPEED_OF_LIGHT} km/s`);
const DELTAV_ESCAPE_EARTH = 11.2;
console.log(`The Delta-v to escape Earth's gravity is ${DELTAV_ESCAPE_EARTH} km/s`);

// DEMO: Define example configuration settings

/** EXAMPLE 3 - CONST vs LET **/

// DEMO: Define a birth year and a current age. Which is which?
const BIRTH_YEAR = 1952; //this never changes, can be a constant
let age = 74; //this changes every year, it would have to be updated

console.log(`My Dad was born in ${BIRTH_YEAR}, and his age at passing was ${age}. May he forever wander and wonder at the stars.`)

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
