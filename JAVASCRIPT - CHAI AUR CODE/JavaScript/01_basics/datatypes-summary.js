//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference Types (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log("-----------------------------------")
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof anotherId);

console.log("-----------------------------------")
console.log(typeof heroes);
console.log(typeof myObj);
console.log(typeof myFunction); // object-function
console.log("-----------------------------------")


// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack (Primitive - Copy ) and Heap (Non-Primitives - Reference means original copy)

let name1 = "Shahe Alam"

let anotherName = "WebXWizard"
anotherName = "Alone Boy"

console.log(name1)
console.log(anotherName)
console.log("-----------------------------------")


let userOne = {
    email:"xyz123@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne

userTwo.email = "123@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)