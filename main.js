// Generates a random whole number between 0 - 999 
let raceNumber = Math.floor(Math.random() * 1000);
// Indicates whether a runner registered early or not
let registeredEarly = false;
// Variable for the runner’s age
const runnersAge = 54;


// Checks whether the runner is an adult AND registered early
if (runnersAge >= 18 && registeredEarly) {
    raceNumber += 1000;
}