"use strict";
// example 1
let greet; // Function Signatures
greet = (name, age) => {
    // if we assign any variable to something that is not a string will generate an error on our function
    console.log(`${name} is ${age} old`);
};
greet("urban", "20");
