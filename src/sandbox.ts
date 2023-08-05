// example 1
let greet: (d: string, c: string) => void; // Function Signatures the parameter a and b can be anything
greet = (name: string, age: string) => {
  // if we assign any variable to something that is not a string will generate an error on our function
  console.log(`${name} is ${age} years old`);
};
greet("Urban", "20");

// example 2 function signature of a number
let calc: (a: number, b: number, c: string) => number;
// this will genaret an error coz  if action is equal to add
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  }
};
