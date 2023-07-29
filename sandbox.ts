// explicit types
let character: string;
let age: number;
let isLogin: boolean;

// we can't say
// age = "10"; coz age is number
// isLogin=23 coz isLogin is boolean

// for arrays
let ninjas: string[];
// we can't say declare the array in any other type which is not a string
// ninjas = ['urban',10] coz 10 is a number
// if we want to push on the array we have to declare
// ninjas.push("string");
let numbers: number[] = [];
numbers.push(2);

// union type on arrays
let mixed: (string | number | boolean)[] = [];
mixed.push("urban");
mixed.push(12);
mixed.push(false);

console.log("first0000", mixed);
// union types on simple variables
let uid: string | number;
uid = "kiko";
console.log("first66", uid);
uid = 4;
console.log("first55", uid);
// uid= true this will not work coz uid is not a boolean

// object
// this is one way way of declaring an object without saying  its type.
let ninjaOne: object;
ninjaOne = { name: "urban", age: 20, isLogin: true };
