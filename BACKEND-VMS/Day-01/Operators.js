//JavaScript operators are special symbols that perform operations on one or more operands (values)


// 1-Assignment Operators-

var name = "John"
console.log(name)

var name2 
console.log(name2)


// 2-Arithmetic Operators- +, -, *, /, **, %


console.log(4+5) 
console.log(4-5)
console.log(4*5)
console.log(4/5)
console.log(4**5)
console.log(4%5)
console.log("")

var k=1;
k=k+1;
console.log(k)
console.log("")

// Incrementing and Decrementing-Shorthand

// Postfix Increment
let g = 10;
console.log(g++);
console.log(g);
console.log("")



// Prefix Increment
let i = 10;
console.log(++i);
console.log(i);
console.log("-----------")


//Postfix Decrement
let j = 10;
console.log(j--);
console.log(j);
console.log("")


//Prefix Decrement
let h = 10;
console.log(--h);
console.log(h);
console.log("-----------")

// 3- Relational Operators-

//Equality 

console.log(1==1) //true
console.log(1==2) //false

console.log(1=="1") // int and then compare values not data types - true

// Strict Equality Check

console.log(1==="1") //false
console.log(1===1) //true

console.log("")


// Inequality Strict

console.log(1!=1)
console.log(1!="1")

console.log(1!=2)
console.log(1!=="1")

console.log("")

// 4- Comparison Operators--

console.log(3>4)
console.log(3>=4)

console.log(3<4)
console.log(3<=4)

console.log("")




// 5- Logical Operators-- 

console.log("Logical operator:")
console.log("")

console.log(3>4 && true)
console.log(3<4 && true)
console.log("")


console.log(3>4 || true)
console.log(3<4 || false)
console.log(3>4 || false)

console.log("")

console.log(true^false)
console.log(false^true)

console.log(false^false)
console.log(true^true)
console.log("")



// Bitwise Operators- 0-false and 1- true

console.log(10 & 6) // Output: 2
console.log(10 | 6) // Output: 14
console.log(10 ^ 6) // Output: 12

console.log(19 & 7); // Output: 3

// 10011 = 19
// 00111 =  7
// 00011 =  3

console.log(19 | 7); // Output: 23

// 10011 = 19
// 00111 =  7
// 10111 = 23

console.log(19 ^ 7); // Output: 20

// 10011 = 19
// 00111 =  7
// 10100 = 20
console.log("")



//1- Assignment operator
console.log("Assignment operator:")
console.log("")

let a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);

console.log("-----------")
console.log("")


//2- Arithmetic Operators
console.log("Arithmetic operator:")
console.log("")


let x = 5;

// addition operator
console.log("Addition: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication: x * 3 =", x * 3);

// division operator
console.log("Division: x / 3 =", x / 3);

// remainder operator
console.log("Remainder: x % 3 =", x % 3);

// increment operator
console.log("Increment: ++x =", ++x);

// decrement operator
console.log("Decrement: --x =", --x);

// exponentiation operator
console.log("Exponentiation: x ** 3 =", x ** 3);

console.log("-----------")
console.log("")



//3- Comparison Operators-
console.log("Comparison operator:")
console.log("")
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);
console.log("")


//4- Logical Operators-- 

console.log("Logical operator:")
console.log("")
let d = 3;

// logical AND
console.log((d < 5) && (d > 0));  // true
console.log((d < 5) && (d > 6));  // false

// logical OR
console.log((d > 2) || (d > 5));  // true
console.log((d > 3) || (d < 0));  // false

// logical NOT
console.log(!(d == 3));  // false
console.log(!(d < 2));  // true

console.log("")