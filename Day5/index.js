// Day 5: Loops in JavaScriptTopics to Study:
// for loop.

// Executes a block of code a specified number of times.

for (let i = 0; i < limit; i++) {
    // Code to execute
}

// while loop.

// Executes a block of code as long as a specified condition is true.

while (condition) {
    // Code to execute
}


// do-while loop.

// Executes a block of code at least once and then continues as long as a specified condition is true.

do {
    // Code to execute
} while (condition);


// break and continue statements.

// break --> Exits the loop immediately.
// continue --> Skips the current iteration and moves to the next.

// Looping through arrays and objects.

// Arrays: Use a for loop or array methods like forEach.
// Objects: Use for...in or Object.keys().

// Practical Questions:
// Write a program using a for loop to:
// Print all even numbers between 1 and 100 (inclusive) in the console.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Write a while loop that:
// Prompts the user for a number until they enter a number greater than 10, then logs that number.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askForNumber = () => {
    rl.question("Enter a number greater than 10: ", (num) => {
        num = Number(num);
        if (num > 10) {
            console.log(`You entered ${num}`);
            rl.close();
        } else {
            console.log("The number is not greater than 10. Try again.");
            askForNumber();
        }
    });
};

askForNumber();


// Use a do-while loop to:
// Ask the user to guess a secret number (between 1 and 100). Keep prompting until the correct number is guessed. Once guessed, log "Correct!" to the console.



const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;

const askForGuess = () => {
    return new Promise((resolve) => {
        rl.question("Guess the secret number (between 1 and 100): ", (input) => {
            resolve(Number(input));
        });
    });
};

const main = async () => {
    do {
        guess = await askForGuess();
        if (guess !== secretNumber) {
            console.log("Wrong guess, try again!");
        }
    } while (guess !== secretNumber);

    console.log("Correct!");
    rl.close();
};

main();


// Example for Extra Practice:
// Write a program to:
// Create an array of numbers.
// Use a for loop to find the sum of all numbers in the array.
// Use continue to skip any negative numbers.

const numbers = [5, -2, 10, -8, 15, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue; // Skip negative numbers
    }
    sum += numbers[i];
}

console.log(`The sum of positive numbers is: ${sum}`);
