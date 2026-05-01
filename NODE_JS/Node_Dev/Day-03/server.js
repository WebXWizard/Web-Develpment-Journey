/* Creating a Server in Node.js via Express */

const express = require("express"); // Using CommonJS require syntax

// import express from 'express'  // Using ES6 import syntax

// Initialize the Express application
const app = express();

// Define a simple route

app.get("/", function (req, res) {
  res.send("Hello World, this is my first Node.js app!");
  console.log(req.url);
  console.log(req.method);
  console.log(req.query);

});

app.get("/express", (req, res) => {
  res.send("My First Express App");
});

app.get("/project", function (req, res) {
  res.send("I worked on this project");
});

app.get("/node", (req, res) => {
  var nodeJS = {
    name: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    version: "18.16.0",
    features: [
      "Asynchronous and event-driven",
      "Single-threaded with event loop",
    ],
  };
  res.send(nodeJS);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
