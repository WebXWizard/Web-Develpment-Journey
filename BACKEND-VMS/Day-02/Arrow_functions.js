/**
 * fn with no argument and no return
 */

var hello = () => console.log("Hello World")
hello()


/**
 * fn with parameters and return
 */

var sum = (a,b) => a+b

console.log(sum(5,7))


/**
 * fn with parameters, multiple lines of fn body
 */


 var process = (a,b) => {
     console.log("need to process")
     console.log(arguments)
     return a*b

 }
 console.log(process(5,6)) 

//  IIFE - anonymous function that runs immediately arguments object

(function () {
  console.log("Hello Students")
})()
