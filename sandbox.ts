// arrays
// how we declare the array will determine the type we assign to it
// names = 'hello' we can't also change the variable of the array to a string also
let names = ["urban", "chris", "scott"];

names.push("urbani"); // this will work because it is a string
// names.push(2); // this will not work coz it is a number

let mixed = ["urban", 1, false];

//this will accepet string,number, boolean coz they were declared at te beginning
mixed.push(2, "nane", true);
console.log(mixed);

// object
let ninja = {
  name: "santos", //ninja.name will always be a string
  color: "red", //ninja.color will always be a string
  age: 20, //ninja.age will always be a number
};
