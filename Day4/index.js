// Day 4: Conditional StatementsTopics to Study:
// if, else if, and else statements.
// switch statement.
// The difference between == and ===.
// Truthy and Falsy values.
// Practical Questions:
// Write a program that:
// Asks the user for their marks (out of 100) using prompt.
// Uses if-else to grade the marks as follows:
// Marks >= 90: "Grade A"
// Marks >= 80: "Grade B"
// Marks >= 70: "Grade C"
// Marks >= 60: "Grade D"
// Marks < 60: "Fail"
// Logs the grade to the console.
// Create a switch statement that:
// Asks the user for a day number (1 for Monday, 2 for Tuesday, etc.).
// Logs the name of the day (e.g., "Monday" for 1, "Tuesday" for 2, etc.).
// Logs "Invalid day number" for any number outside 1-7.
// Example for Extra Practice:
// Write a program to:
// Ask the user to enter a year.
// Check if the year is a leap year using these conditions:
// A year is a leap year if divisible by 4 but not divisible by 100, or divisible by 400.
// Log Leap year or Not a leap year.



// Conditional Statements:
// if, else if, and else:

// Executes code blocks based on conditions.



if (condition1) {
    // code block for condition1
} else if (condition2) {
    // code block for condition2
} else {
    // default code block
}
// switch Statement:

// Compares a single value against multiple cases.



switch (value) {
    case 1:
        // code block for case 1
        break;
    case 2:
        // code block for case 2
        break;
    default:
        // code block for all other cases
}
// Difference between == and ===:

// ==: Checks for equality after type conversion (loose comparison).
// ===: Checks for equality without type conversion (strict comparison).



console.log(5 == "5");  // true
console.log(5 === "5"); // false
// Truthy and Falsy Values:

// Truthy: Values considered true in a boolean context (e.g., 1, "text", [], {}).
// Falsy: Values considered false in a boolean context (e.g., 0, "", null, undefined, NaN, false).
// Practical Examples
// 1. Grade Marks Using if-else:


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your marks (out of 100): ", (marks) => {
    marks = Number(marks);
    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 80) {
        console.log("Grade B");
    } else if (marks >= 70) {
        console.log("Grade C");
    } else if (marks >= 60) {
        console.log("Grade D");
    } else {
        console.log("Fail");
    }
    rl.close();
});
// 2. Days Using switch:


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.question("Enter a day number (1-7): ", (dayNumber) => {
    dayNumber = Number(dayNumber);
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number");
    }
    rl.close();
});

//3. Check for Leap Year:


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.question("Enter a year: ", (year) => {
    year = Number(year);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a Leap year`);
    } else {
        console.log(`${year} is Not a leap year`);
    }
    rl.close();
});
