
// Variables = Container for data, changes(vary) according to the users

x = null;
console.log(x);


// y = undefined;
// console.log(y);

// Types of variables - Place to Store Data
// camelCase= fullName

var name;
//Declaration
console.log(name) //Undefined

name="John Wick";
//Initialization
console.log(name) //John Wick

var age=19;
console.log(age) //19

/** 
 How to name a Variable--

 Rules--
 1- a-z/A-z/0-9/_/$
 2- Keywords are not used or avoided
 3- No Space is allowed
 4- Special Characters are not allowed

*/ 

/**
 Guidelines-
 1-Meaningful
 */

/**
 Observations-
 -They are Case Sensitive
 */


 var hobby
console.log()

 var Nationality
 console.log(Nationality)
 

 
// 1. var
// 2. let
// 3. const

var a = 10
console.log(a)
let b = 20
console.log(b)
const c = 30
console.log(c)

// using let we can change the value of variables
b = 40
console.log(b)

// using const we can't change the value of variable
// c = 50
// console.log(c)

var x = 30
// Re declaration is possible in var
var x = 40
// Reassign is possible in var
x = 50
console.log(x)

let y = 30
// Re-declaration is not possible in let
// let y = 40
// Reassign is possible in let
y = 50
console.log(y)

// Re-declaration and reassignment is not possible in const

console.log("---------------------------")
// Local scope
let num = 10
console.log(num)

if (true) {
    let num = 20
    console.log(num)
}
console.log(num)

console.log("---------------------------")

// Global scope
var num1 = 10
console.log(num1)

if (true) {
    var num1 = 20
    console.log(num1)
}
console.log(num1)