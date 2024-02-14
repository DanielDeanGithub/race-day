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


if (runnersAge >= 18 && registeredEarly) {
    console.log(`Number ${raceNumber} will race at 9:30 am.`);
} else if (runnersAge >= 18 && !registeredEarly) {
    console.log('Late adults run at 11:00 am');    
} else if (runnersAge < 18) {
    console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}