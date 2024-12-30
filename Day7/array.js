// Day 7: Arrays in JavaScriptTopics to Study:

// Creating arrays ([] and new Array() methods).
const arrays = [1, 'a', true]

console.log(arrays)

const cars = new Array("Ankush", "JS", "Node", "React", "next.js");
console.log(cars)
// Common array methods:
// Adding/removing elements: push(), pop(), unshift(), shift().
cars.push(true)
console.log(cars)

cars.pop()
console.log(cars)

cars.unshift("javascript")
console.log(cars)
cars.shift()
console.log(cars)

// Finding elements: indexOf(), includes().

console.log(cars.indexOf("ankush"))
console.log(cars.indexOf("Ankush"))
console.log(cars.includes("Ankush"))
console.log(cars.includes("ankush"))
// Manipulating arrays: slice(), splice().
console.log(cars.slice(0,2)) 
console.log(cars.slice(2)) 
console.log(cars.slice(-2,4)) 
console.log(cars.slice(-2,-1)) 
console.log(cars.splice(0,2)) 
console.log(cars.splice(0,2, 67))


// Iterating: forEach(), map().
 
// Combining and splitting arrays: concat(), join().
// Practical Questions:
// Create an array of your favorite fruits. Use the following methods:
// Add a fruit to the beginning and end of the array.
// Remove a fruit from the beginning and end of the array.
// Log the final array.
// Write a program that:
// Creates an array of numbers.
// Uses map() to double each number in the array.
// Logs the original and the doubled arrays.
// Write a function findElement that:
// Accepts an array and a value as parameters.
// Returns the index of the value if it exists, or -1 if it doesn't.
// Example for Extra Practice:
// Write a program to:
// Create an array of student names.
// Use slice() to create a new array of the first 3 students.
// Use splice() to add a new student at the second position.
// Log the original and modified arrays.
