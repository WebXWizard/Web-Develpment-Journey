/* Problem 1: Understanding Servers and Express.js */

/* Problem 2: JSON Manipulation */

var jsonObject = { name: "Alice", age: 25, hobbies: ["reading", "painting"] };
console.log(JSON.stringify(jsonObject.age));

var jsonBook = { title: "Book", pages: 200 };
console.log(JSON.stringify(jsonBook));

console.log("-------------------------------");

/* Problem 3: API and Endpoints */

/* Problem 4: Creating a Route with Express.js */

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!!!");
});

app.get("/weather", (req, res) => {
  const weatherData = {
    temperature: 25,
    conditions: "Sunny",
    city: "Los Angeles",
  };
  res.json(weatherData);
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

console.log("-------------------------------");

/* Problem 5: JSON Parsing and Object Conversion */

const jsonData = '{"product": "Laptop", "price": 999.99}';
const parsedObject = JSON.parse(jsonData);
console.log(parsedObject.product); // Output: Laptop

console.log("-------------------------------");

var obj = { name: "Bob", age: 30 };
console.log(JSON.stringify(obj));
console.log("-------------------------------");
