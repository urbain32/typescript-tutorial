"use strict";
// example 1
let greet; // Function Signatures the parameter a and b can be anything
greet = (name, age) => {
    // if we assign any variable to something that is not a string will generate an error on our function
    console.log(`${name} is ${age} years old`);
};
greet("Urban", "20");
