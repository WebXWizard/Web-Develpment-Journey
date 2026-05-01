
// Objects are collections of key-value pairs, where keys are strings (or Symbols) and values.

const user = {
  name: "John ",
  age: 99,
  city: "Bangalore",
};

// Accessing the data

console.log(user.name);
console.log(user["name"]);

/**
  Adding data to the object
 */

user.country = "India";
user["continent"] = "Asia";

console.log(user);


//  Deleting object keys and object itself
 
delete user.country
console.log(user)

delete user['continent']
console.log(user)
console.log("-------------------------------------------")

// Iterate over a objects -

let person = {
  name: "John",
  age: 99,
  address: {
    city: "Bangalore",
    state: "Kerala",
    country: "India",
  },
};

//console.log(key) - name age address

for (let key in person) {
  console.log(key, " => ", person[key]);
}

console.log(Object.keys(person)); // keys
console.log("-------------------------------------------")

console.log(Object.values(person)); // values
console.log("-------------------------------------------")

//Get both keys and the values
console.log(Object.entries(person)); // key:value
console.log("-------------------------------------------")

console.log()
/**
  Cloning an object using assign
 */

const new_person = Object.assign({}, person);
console.log(new_person); // clone person object
console.log("-------------------------------------------")

const new_person_1 = Object.assign({}, person, { role: "Developer" });
console.log(new_person_1);
