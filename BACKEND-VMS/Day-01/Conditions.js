console.log("Conditional Statements----");

console.log("-------------");

// Types of Conditions--

// if(to check single condition--)
// if-else(to check single conditions--)
// if-else-if(to check multiple conditions)
// Ternary--(to check)

// if statements---
let age = 19;
if (age >= 18);
{
  console.log("You are Eligible to Vote ");
}

var num = 20;
if (num % 2 == 0) {
  // Boolean - True then if Block executed
  console.log("Even Number");
} else {
  /// else does not have existence if else is not in condition then else not exists
  console.log("Odd Number");
}

console.log("After if");

var num2 = 21;
if (num % 2 == 0) {
  console.log("Odd Number");
}
console.log("After if");



// Ternary Operators for if-else

// Agar True ho toh first executed otherwise second will executes

13 % 2 == 0 ? console.log("Even") : console.log("Odd");

10 % 2 == 0 ? console.log("Even") : console.log("Odd");

// if-else conditions--

console.log("..............");
let a = 10;
if (a >= 18) {
  console.log("You are Eligible to Vote ");
} else {
  console.log("You are not Eligible to vote");
}

// if-else statements---

console.log("..........");
let temp = 45;
if (temp < 45) {
  console.log("Live in Home...");
} else {
  console.log("GO to Take");
}

// Nested Conditions

/// if-else-if statements---

console.log("..........");
let marks = 80;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail.....");
}

// Nested if-else

var g = 10;

if (g > 5) {
  if (g > 0) {
    console.log(" g is greater than 0 and 5");
  } else {
    console.log("g is greater than 0 but less than 5");
  }
} else {
  console.log("g is less than 0");
}

g >= 0
  ? g > 5
    ? console.log(" g is greater than 0 and 5")
    : console.log("g is greater than 0 but less than 5")
  : console.log("g is less than 0");

//------------
console.log("");
console.log("");
let c = 20;
let result = c > 10 ? "Greater than 10" : "Less than 10";
console.log(result);

// There are three types of conditions in JavaScript
// 1. if statement
// 2. if-else statement
// 3. if-else-if statement
// 4. switch statement

console.log("");
console.log("");
// if statement
let age_1 = 18;
if (age_1 >= 18) {
  console.log("You can vote");
}
if (age_1 === 18) {
  console.log("You are 18 so you also can vote");
}
if (age_1 < 18) {
  console.log("You can't vote");
}

console.log("---------------------------");

// if-else-if statement
let age_2 = 18;
if (age_2 >= 18) {
  console.log("You can vote");
} else if (age_2 === 18) {
  console.log("You are 18 so you also can vote");
} else {
  console.log("You can't vote");
}

console.log("---------------------------");

// Switch statement

let day = 5;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
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
  default:
    console.log("Invalid day");
}

// Ternary Operator --

let age2 = 18;
let message = age2 >= 18 ? "You can Vote" : "You can't Vote";
console.log(message);

console.log("---------------------------");

let age3 = 18;
let message2 =
  age3 < 18
    ? "You are minor"
    : age3 >= 18 && age3 < 60
    ? "You are an Adult"
    : "You are Senior";
console.log(message2);
