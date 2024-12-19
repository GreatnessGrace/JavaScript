// Day 6: Functions in JavaScriptTopics to Study:
// Function declaration.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function expressions.
// const calculateArea = function(length, width) {
//     return length * width;
// };

// Arrow functions (=>).
// const isEven = (number) => number % 2 === 0;

// Parameters and default values.
function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}


// Returning values from functions.
const multiply = (a, b) => a * b;

// Practical Questions:
// Write a function called greet that:
// Takes a name as a parameter.
// Logs "Hello, [name]!" to the console.
// Call the function with your name.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the function with your name
greet("Ankush");

// Create a function called calculateArea that:
// Accepts two parameters: length and width.
// Returns the area of a rectangle.
// Call the function with different values and log the results.
function calculateArea(length, width) {
    return length * width;
}

// Call the function with different values
console.log(calculateArea(5, 10)); 
console.log(calculateArea(7, 3));  

// Write an arrow function called isEven that:
// Takes a number as a parameter.
// Returns true if the number is even, otherwise false.
// Test the function with different numbers.

const isEven = (number) => number % 2 === 0;

// Test the function with different numbers
console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(10));

// Example for Extra Practice:
// Write a function findMax that:
// Accepts an array of numbers as a parameter.
// Returns the largest number in the array.
// Call the function with [3, 5, 7, 2, 8] and log the result.

function findMax(numbers) {
    return Math.max(...numbers);
}

// Call the function with [3, 5, 7, 2, 8]
console.log(findMax([3, 5, 7, 2, 8])); // 8
