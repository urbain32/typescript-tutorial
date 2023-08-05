"use strict";
// example 1
let greet; // Function Signatures the parameter a and b can be anything
greet = (name, age) => {
    // if we assign any variable to something that is not a string will generate an error on our function
    console.log(`${name} is ${age} years old`);
};
greet("Urban", "20");
// example 2 function signature of a number
let calc;
// this will genaret an error coz  if action is equal to add
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
};
