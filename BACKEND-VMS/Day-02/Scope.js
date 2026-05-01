/*
 Global scope
 */

var name = "John";
console.log(name);

function func() {
  console.log(name);
}
func();
// name is accessible here because it is in the global scope

/*
  Local scope / Function scope variable
 */

function fun() {
  var num = 55  // local scope
    console.log("num");
}

fun();
// console.log(num); // not defined

/*
  Block Scope
 */

{
  var x = 20;
  console.log(x);
}

console.log(x);

{
  let x = 20;
  console.log(x);
}

// console.log(x); // block scope
