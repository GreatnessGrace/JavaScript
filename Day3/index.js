// Day 3: Operators in JavaScriptTopics to Study:
// Arithmetic operators: +, -, *, /, %, **
// Assignment operators: =, +=, -=, etc.
// Comparison operators: ==, ===, !=, !==, <, >, <=, >=
// Logical operators: &&, ||, !
// Unary operators: typeof, +, -
// Ternary operator: condition ? expr1 : expr2
// Practical Questions:
// Write a program that:
// Asks the user for two numbers (using prompt) and performs all arithmetic operations on them.
// Logs the results in the console.
// Write a program to:
// Check if a number is even or odd using the modulus operator (%).
// Use a ternary operator to log Even or Odd.
// Use typeof to check and log the data types of variables you create for a string, number, and a boolean.
// Example for Extra Practice:
// Create a program that asks the user for their age and checks if they are eligible to vote:
// Use if-else and comparison operators to determine if the user is 18 or older.
// Log Eligible to vote or Not eligible to vote.

// 1. Arithmetic operators

// %: Modulus (remainder)

// **: Exponentiation

// /: Division

// 2. Assignment Operators:

// +=: Add and assign
// -=: Subtract and assign
// Other similar operators for *, /, %

// Unary Operators:
// Work with a single operand:

// typeof: Returns the data type of a value.
// +: Converts a string to a number (if possible).
// -: Negates a number.

// Ternary Operator:
// A compact conditional operator:
// condition ? expr1 : expr2

// 2. Check if a number is Even or Odd:


// let number = Number(prompt("Enter a number to check if it's even or odd:"));
// let result = (number % 2 === 0) ? "Even" : "Odd";

// 3. Check and log data types:


let myString = "Hello, JavaScript!";
let myNumber = 42;
let myBoolean = true;

console.log(`Type of myString: ${typeof myString}`); // string
console.log(`Type of myNumber: ${typeof myNumber}`); // number
console.log(`Type of myBoolean: ${typeof myBoolean}`); // boolean

// 4. Eligibility to Vote Program:

let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}
