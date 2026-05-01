// Import and Export 

console.log("-----------------------------------------");

const notes = require("./notes.js"); // Importing the notes module

console.log("Server File is Available");

console.log(notes); // Log the notes module

console.log("-----------------------------------------");

var age = notes.age;
console.log(age);
console.log("-----------------------------------------");

var sum = notes.addNumber(age + 10, 6);
console.log(`Sum is ${sum}`);

