// Arrays in JavaScript - Ordered collection of items of different data types based on index.

//  array = [1,2,3]

// console.log(typeof array) // object - Arrays are objects

//  arr1 = new Array()

// console.log(typeof arr1) // object

// console.log(arr1)

//  How to access elements in an array-

// arr = [1,2,3,4,9,8,7,19,21,29,20]

// console.log(arr[0]) // 1

// console.log(arr[7]) // 19

// console.log(arr[21]) - // undefined

// console.log(arr[-1]) - // undefined  - not valid index

/**
  Arrays are mutable. We can modify the arrays
 */

// arr[1] = 200
// console.log(arr)

// Insert or Add items in the arrays

// arr = [5, 7, 1, 9, 8, 16];
// console.log(arr);

// push method - add at end of arr

// arr.push(11);
// console.log(arr);

// arr.push(99, 100, 101);
// console.log(arr); // add multiple items at end of arr

// unshift method - add at beginning of arr

// arr.unshift(999);
// console.log(arr);

// arr.unshift(9, 99, 999);
// console.log(arr);

/**
 Removing elements
 */

// pop method - removes last element of the array

// let arr = [5, 7, 1, 9, 8, 16];
// console.log(arr.pop());
// console.log(arr);

// shift - removes first element of the array

// console.log(arr.shift());
// console.log(arr);

// concat - combines two or more arrays

// let a1 = [1, 2, 3];
// let a2 = [5, 6];

// let r = a1.concat(a2);
// console.log(r);

//  size of the arr -
// console.log(a1.length);

/**
  Convert array into strings
 */

// chr_arr = ["V", "i", "s", "h", "w", "a", " ", "M", "o", "h", "a", "n"];

// // join - convert array into string with a separator

// console.log(chr_arr.join());
// console.log(chr_arr.join("")); // no separator
// console.log(chr_arr.join("$"));

// // toString - convert array into string without a separator
// console.log(chr_arr.toString());
// console.log(typeof chr_arr.toString());

/**
  Slicing of the array - Does not modifies existing arrays
 */

//  let Sums = [3,4,5,5,6,7,9,11,13,12,10]

// console.log(Sums.slice(2))
// console.log(Sums.slice(2,7))
// console.log(Sums.slice(5,-1))
// console.log(Sums.slice(-9,-2))
// console.log(Sums.slice(2,-1))

// console.log(Sums) 


// Splicing - which modifies the given original array
 
// let numbers = [1,2,3,4,5]
// let removed = numbers.splice(2,2,11,12,13) // start index, no of elements to remove, elements to add
// console.log(removed)
// console.log(numbers) 


//  Reverse a given array
 

// let Sums  = [4,1,5,7,19,2]
// Sums.reverse()
// console.log(Sums) 

// let Sums  = [4,1,5,7,19,2]
// console.log(Sums.indexOf(21))  // return -1 
// console.log(Sums.indexOf(19))  // return 4

/**
  sorting the array
 */

let my_arr = [15, 40, 1, 13, 2];

my_arr.sort((a,b)=> a-b) // ascending order
// my_arr.sort() // sorts as strings by default
console.log(my_arr);

my_arr.sort((a, b) => b - a); // descending order
console.log(my_arr);
