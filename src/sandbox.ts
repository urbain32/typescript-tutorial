// example 1
let greet: (d: string, c: string) => void; // Function Signatures the parameter a and b can be anything
greet = (name: string, age: string) => {
  // if we assign any variable to something that is not a string will generate an error on our function
  console.log(`${name} is ${age} years old`);
};
greet("Urban", "20");
// example 2 function signature of a number
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    console.log(numOne + numTwo);
    return numOne + numTwo;
  } else {
    console.log(numOne - numTwo);
    return numOne - numTwo;
  }
};
calc(12, 5, "add");
// example 3 function signature of a object
let logDetails: (obj: { name: string; age: number }) => void;
// adding a type  aliases
type person = { name: string; age: number };
logDetails = (ninjas: person) => {
  console.log(`${ninjas.name} is ${ninjas.age} years old`);
};
logDetails({ name: "Tony", age: 20 });
