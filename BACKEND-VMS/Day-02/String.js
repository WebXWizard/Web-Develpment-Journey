/**
  String - String is a sequence of characters
  1. String is immutable - once created, it cannot be changed.
  2. String is a primitive data type in JavaScript
  3. String is enclosed in single quotes, double quotes, or backticks.
 */

let name = 'John'

let city = "Bangalore"

console.log(name , city)
console.log(typeof name)

/**
  Accessing character based on index
 */

console.log(name[0]) // J
console.log(name[3]) // n
console.log(name[11]) // Undefined - invalid index

name[2] ="M" // Reassign not valid - immutable 
console.log(name)

// Why string is immutable?

// 1. Performance - Strings are stored in memory as a single block, so changing a character would require creating a new block of memory.
// 2. Security - Immutable strings prevent accidental changes
// 3. Consistency - Immutable strings ensure that the original string remains unchanged, which is
// important for many operations like hashing, encryption, etc.


// Methods of String
/**
  String methods
  1. length - returns the length of the string
  2. toUpperCase - converts the string to uppercase
  3. toLowerCase - converts the string to lowercase
  4. charAt - returns the character at the specified index
  5. slice - extracts a section of the string and returns it as a new string
  6. indexOf - returns the index of the first occurrence of a specified value in a string
 */
console.log(name.toUpperCase()) // JOHN
console.log(name.toLowerCase()) // john
console.log(name.charAt(2)) // h
console.log(name.slice(1,4)) // ohn
console.log(name.indexOf('o')) // 1
console.log(name.indexOf('z')) // -1 (not found)


// Length of the string
console.log(name.length)


/**
  String concatenation
  1. Using + operator
  2. Using concat method
 */

let first_name = "John"
let last_name = " Snow"

let full_name = first_name.concat(last_name)
console.log(full_name)

console.log( first_name + last_name)


/**
  convert that into upper case
 */
console.log(full_name.toUpperCase())

/**
  Character at any index str[i]
 */
console.log(name.charAt(3))

/**
  Slicing
 */

console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))

/**
  indexOf
 */
console.log(name.indexOf('z')) //return -1
console.log(name.indexOf('n')) //return -1


/**
 * trim
 */
let word = " Hello "
console.log(word)
console.log(word.trim()) //

// split
name = "Hello How Singh"

console.log(name.split(" "))// Array 
console.log(name.split(""))// Array 