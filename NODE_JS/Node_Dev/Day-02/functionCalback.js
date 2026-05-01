
/* Functions */

/* function add(a, b) {
    return a + b;
}
 
var add = function (a, b){
return a+b;

}

var add = (a, b) => {
    return a + b;
} 
    */

var add = (a, b) => a + b;
var result = add(5, 10);
console.log("The result of addition is: " + result);

// IIFE - anonymous function
(function () {
  console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();
console.log("-----------------------------------------");

/*

Callback Functions - Callbacks are functions passed as arguments to other functions, allowing for asynchronous operations or custom behavior after a function completes.
They are often used in event handling, asynchronous operations, and when you want to execute 

*/

function callback() {
  console.log("I'm calling a callback function");
}

const addWithCallback = (a, b, callback) => {
  const sum = a + b;
  console.log("The sum is: " + sum); // main function output
  // Call the callback function
  callback(sum);
};
addWithCallback(5, 10, callback);

 addWithCallback(5, 10, (result) => {
    console.log("Callback executed with result: " + result);
});

// addWithCallback(5, 10, () => {
//     console.log("Callback executed without parameters");
// });
console.log("-----------------------------------------");
 