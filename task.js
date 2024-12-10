// Day 2: Variables and Data TypesTopics to Study:
// What are variables? (var, let, const)
// Rules for naming variables.
// Primitive data types: string, number, boolean, null, undefined, and symbol.
// Practical Questions:
// Create variables using let and const:
// Store your name in a string.
// Store your age in a number.
// Store whether you are learning JavaScript as true.
// Assign null to a variable and undefined to another variable.
// Write a program that:
// Adds two numbers and displays the result.
// Concatenates two strings and logs the combined string.
// Example for Extra Practice:
// Create a variable for your current city. Later, update the value to a different city using let. Try the same with const and note the error in the console.



// 1. Variables (var, let, const):
// var: Function-scoped and can be re-declared. It is hoisted but can lead to unexpected behavior due to lack of block-scoping.
// let: Block-scoped, cannot be re-declared within the same scope. It is hoisted but not initialized.
// const: Block-scoped and must be initialized at the time of declaration. Its value cannot be reassigned.

// 2. Rules for Naming Variables:
// Must begin with a letter, $, or _.
// Cannot contain spaces or start with a number.
// Cannot use reserved keywords (e.g., let, const, if).
// Variable names are case-sensitive.

// Primitive Data Types:
// 1. String: Sequence of characters, e.g., "Hello".
// 2. Number: Includes integers and decimals, e.g., 42 or 3.14.
// 3. Boolean: true or false.
// 4. Null: Explicitly represents an empty or non-existent value.
// 5. Undefined: A variable declared but not assigned a value.
// 6. Symbol: Represents a unique value (rarely used).

const name = "ankush"
const age = 22
let learningJs = true

let nullVariable = null;
let undefinedVariable;

const a = 25;
const b= 26;

const sum = a+b;

console.log(sum)

let greeting = "Hello";
let target = "World";
let combinedString = greeting + " " + target;
console.log("Combined String:", combinedString);


// Using let
let city = "Mohali";
console.log("Current city:", city);
city = "Chandigarh"; 
console.log("Updated city:", city);

// Using const
const homeCity = "Fazilka";
console.log("Home city:", homeCity);
// homeCity = "Bangalore"; // Uncommenting this line will throw an error
