// Episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// console.log(verdict) will produce "The murderer is Miss Scarlet."
// Reason: scenario.murderer is equal to 'Miss Scarlet' - scenario is in the global scope and has not been updated in any way.


// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// console.log(verdict) will produce "The murderer is Professor Plum." (Though the program will actually stop running when it reaches the changeMurderer function as attempting to reassign the const variable will create an error.)
// Reason: The murderer variable was declared using the const keyword and so cannot be reassigned in the changeMurderer function.


// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// console.log(firstVerdict) will produce "The murderer is Mrs Peacock."
// Reason: The global scope murderer variable was declared using the let keyword so can be reassigned in the declareMurderer function with a new let variable declaration (block scope).

// console.log(secondVerdict) will produce "The murderer is Professor Plum."
// Reason: The global scope murderer variable may have been declared with the let keyword but the only reassignment of the variable was made within the declareMurderer function and it has only block scope (i.e. the change is not available outwith that code block in the function).


// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);


// console.log(suspects) will producee "The suspects are Miss Scarlett, Professor Plum, Colonel Mustard"
// Reason: suspectThree was declared in the global scope using the let keyword so can be reassigned within the declareAllSuspects function that is assigned to the suspects variable.

// console.log(`Suspect three is...`) will produce "Mrs Peacock".
// Reason: The let reassignment of suspectThree within the declareAllSuspects function is not available outwith that function so the original variable is not reassigned in the global scope.


// Episode 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// console.log(verdict) will produce "The weapon is the Revolver."
// Reason: Though a const variable, scenario is an object and so it's properties can be updated without attempting to reassign the variable. The changeWeapon function was called before the declareWeapon function so the original weapon has been replaced with the new weapon.


// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);



// console.log(verdict) will produce "The murderer is Mrs White."
// Reason: The changeMurderer function (which itself contains another function, plotTwist, which is called within changeMurderer) is called before the declareMurderer function is called and so the murder variable has been reassigned (twice) to end up as Mrs White.


// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mr. Green';

    const plotTwist = function() {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function() {
        murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// console.log(verdict) will produce "The murderer is Miss Scarlet.""
// Reason: The changeMurderer (and within it the plotTwist and unexpectedOutcome functions, both called) is called prior to the declareMurderer function being called so the murderer has been reassigned to Miss Scarlet.


// Episode 8
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function(room) {
        if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
            scenario.weapon = 'Candle Stick';
        }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);


// console.log(verdict) will produce "The weapon is Candle Stick."
// Reason: The changeScenario function (called before the declareWeapon function) has contained within it multiple updates to the properties in the scenario variable object which, when followed, end with the weapon being changed from Lead Pipe to Candle Stick.


// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// console.log(verdict) will produce "The murderer is Professor Plum."
// Reason: The reassignment of murder in the if statement was a let declaration not accessible outwith that block of code so the murderer has not be reassigned.


// Extensions
const scenario = {
    murderer: 'Professor Plum',
    room: 'Dining Room',
    weapon: 'Dagger'
};

const changeScenario = function() {
    if (scenario.murderer !== "Colonel Mustard") {
        scenario.room = "Bedroom";
    }
    if (scenario.room === "Dining Room") {
        scenario.weapon = "Rope";
    }
    const plotTwist = function() {
        scenario.murderer = "Mrs Peacock";
    }
    const anotherTwist = function() {
        scenario.murderer = "Mr Green";
    }
    scenario.murderer = "Miss Scarlet";
    anotherTwist();
    scenario.room = "Kitchen";
    plotTwist();
}

const declareSuspicions = function(weapon) {
    if (scenario.weapon === weapon) {
        return `I suspect ${scenario.murderer}, with the ${scenario.weapon}, in the ${scenario.room}.`;
    }
}

changeScenario();
const verdict = declareSuspicions("Dagger");
console.log(verdict);

// console.log(verdict) will produce "I suspect Mrs Peacock, with the Dagger, in the Kitchen."
// Reason: "Mrs Peacock" because the plotTwist function call is the last code statement that can have an effect on the murderer. "Dagger" because the weapon never changes (scenario.room is Bedroom in the weapon change if statement). "Kitchen" because that is the last room reassignment in the change Scenario function.