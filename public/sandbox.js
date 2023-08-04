"use strict";
// function declaration
let names;
names = () => {
    console.log("first name");
};
// if we say names = 'kkioko' this will be an error coz names has been defined as  function
// best way to declare a function
const sum = (a, b, c = 10) => {
    // adding a default value
    // c is sting or number coz doesn't have a default value we use ?
    console.log(a + b);
    console.log(c);
};
// sum(2, "2"); this will not work coz b is a string
sum(2, 2, "20"); // now the value of c will be '20' not 10
