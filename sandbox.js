// explicit types
var character;
var age;
var isLogin;
// we can't say
// age = "10"; coz age is number
// isLogin=23 coz isLogin is boolean
// for arrays
var ninjas;
// we can't say declare the array in any other type which is not a string
// ninjas = ['urban',10] coz 10 is a number
// if we want to push on the array we have to declare
// ninjas.push("string");
var numbers = [];
numbers.push(2);
// union type on arrays
var mixed = [];
mixed.push("urban");
mixed.push(12);
mixed.push(false);
console.log("first0000", mixed);
// union types on simple variables
var uid;
uid = "kiko";
console.log("first66", uid);
uid = 4;
console.log("first55", uid);
// uid= true this will not work coz uid is not a boolean
// object
// this is one way way of declaring an object without saying  its type.
var ninjaOne;
ninjaOne = { name: "urban", age: 20, isLogin: true };
// object with its types
var ninjaTwo;
// ninjaTwo = { name: "urban", age: '20', isLogin: true }; age is a number not a string
ninjaTwo = { name: "urban", age: 20, isLogin: true };
