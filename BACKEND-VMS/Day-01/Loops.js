/** 
 * Loops - Repeat Again and Again
 There are two types of loops in JavaScript --Repeat Again and Again
 1. for loop
 2. while loop
*/

/**
 * for (let i = 0; i<=10; i++) {
    console.log(i)
}

console.log("")
 */

// 1- for loop - How many when you Number of times

for (j = 0; j < 10; j++) {

  // (Initialization ; Boolean Expression ; Update )

  console.log("Hello Students");
}

console.log("");

/**
 * 
 If j++ removed - Infinite Loops - Server Crashed
 Also No Checking j < 10 - Infinite Loop

 */

// 2- while loop - If execution based on conditions

let i = 0;
while (i <= 10) {
  console.log("Hii ");
  i++;
}
console.log("");

/**
 If j++ removed-Infinite Loops - Server Crashed
 Also No Checking J<10 -Infinite Loop
 */

// for (let i = 0; i<5; i++) {
//     console.log("John")
// }

// for of loop -- array with String

let names = ["John", "Smith", "Sam"];
for (let name of names) {
  console.log(name, "is a good human");
}

console.log("---------------------------");

// for in loop  -- Key value pair
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let k in person) {
  console.log(k);
}

console.log("---------------------------");

// to print both the keys and values
for (let k in person) {
  console.log(k, ":", person[k]);
}

console.log("---------------------------");

//Loop Question--

let fr = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Papaya",
  "Guava",
  "Lichi",
];
for (let i = 0; i < fr.length; i++) {
  console.log(fr[i]);
}
console.log(fr);

console.log(fr);

console.log("")

// Break--

for (var z = 0; z < 10; z++) {
  if (z == 5) {
    break;
  }
  console.log("Hey-" + z + "-Lets Date");
}
console.log("")

// Continue--

for (var x = 1; x <= 50; x++) {
  if (x % 2 != 0) {
    continue;
  }
  console.log(x);
}
console.log("")

// Nested Loops-

for (var y = 0; y < 10; y++) {
  for (m = 0; m < 10; m++) {
    if (m % 2 != 0) {
      continue;
    }
    console.log(m);
  }
}
console.log("")
