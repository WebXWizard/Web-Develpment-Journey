/* File System and OS API */

var fs = require("fs"); // Importing the file system module
var os = require("os");

var user = os.userInfo(); // Get the user information
console.log(user); // Log the user information
console.log(user.username); // Log the username
console.log("-----------------------------------------");

/* 
Append a greeting to the file greet.txt */

fs.appendFile(
  "greet.txt",
  "Hello - " + "WebXWizard, How are You??" + "!\n",
  () => {
    console.log("File is Created");
  }
);
console.log("-----------------------------------------");

console.log(os); // Log the os module
console.log("-----------------------------------------");

console.log(fs); // Log the fs module
console.log("-----------------------------------------");

// Loa_dash Library

var _ = require("lodash"); // Importing the lodash library with _ being this is common convention
console.log("Lodash is loaded");


var data = ["person1", "person", 1, 2, 1, 2, "2"];
var uniqueData = _.uniq(data);
console.log(uniqueData); // Log unique data
console.log("-----------------------------------------");

console.log(_.isString("Hello"));

console.log(_.isString(123));

console.log("-----------------------------------------");
