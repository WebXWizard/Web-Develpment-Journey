// Data Types --- Type of data that variable will store

/** 
 1- Primitive : Simple and Immutable(Not Change)

a-Number
b-String
c-Undefined
d-Boolean
e-Null
f-Symbol
g-BigInt

*/

/** 
 2- Non Primitive Datatypes: Complex and Mutable(Changeable)

a-Object'
b-Arrays */
 


console.log("...................");
console.log("Primitive Data Type");



//  Primitive Data Types -

// String
var name="John"
console.log(name)

var title="Wick"
console.log(title)

//  typeof = Print type of DataTypes

console.log(typeof title)

// Number

let x = 10;
let y = 20;
sum = x + y;
console.log(sum);
console.log("");
console.log(typeof sum);

console.log("....................");
let a = 34;
console.log(a, typeof a); //Number

let b = "Hello";
console.log(b, typeof b); //String


// Boolean

isFollow = true;
console.log(isFollow, typeof isFollow); //Bool

console.log("");

// null

x = null; // Purposefully don't want any value assign to variable
console.log(x, typeof x); // Object - Bugs Exception

// Undefined 

y = undefined;
console.log(y, typeof y); // Undefined - You define Variable but not initialized or assigned value.  

//BigInt

let z = BigInt("123");
console.log(z, typeof z); 

var big_num=123n; //n indicates big integer
console.log(big_num, typeof big_num);

console.log(typeof NAN) //Number

//Symbol

let r = Symbol("HELLO");// Constructors Uniques objects
console.log(r, typeof r);

console.log();

//---------------

console.log(1 == "1"); //true

console.log(1 === "1"); //false

console.log();

console.log();



//2- Non-Primitive-

console.log("...................");

console.log("Non-Primitive Data Type");

console.log("Object DataType - Key-value ");
console.log();

// Objects - Collection of Values (Real World Entity)

let student = { 
    fullName: "John Wick", // Keys-student-String or symbols and Values - DataTypes
    age: 21,
     gpa: 8, 
     city: "Lucknow"
 };
console.log();

console.log(typeof student, student);

console.log();
console.log(student.fullName);
console.log(student.age);
console.log(student["city"]);

student.age = 22;
console.log(student.age);

//const objects key are Changeable--

//Array --
