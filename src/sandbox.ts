// example 1
let greet: (a: string, b: string) => void; // Function Signatures
greet = (name: string, age: string) => {
  // if we assign any variable to something that is not a string will generate an error on our function
  console.log(`${name} is ${age} old`);
};
greet("urban", "20");
