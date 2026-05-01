/**
  var  :
    1. It's used to define a variable
    2. It has function scope but no block scope
    3. It is hoisted
 */

function f1() {
  var i = 5;
  console.log(i);
}
f1();
console.log(i); // not defined

{
  var i = 5;
}
console.log(i); // no block scope // output - 5


// Hoisting

console.log(i); 
var i = 23;
console.log(i);



/**
  let : 
  1. No hoisting
  2. It also has block scope

 **/

// console.log(i); // not hoisted
// let i = 5;

{
  let name = "John";
}

// console.log(name); // not defined - block scope


/**
  const :
    1. It has block scope, so it is not accessible outside the block
    2. It is not hoisted
    3. scope is exactly same as let
    4. const variables are final, can't be re-assigned a value
 */

const country = "India";

// country = "USA"; // cannot re-assign a value to const variable
