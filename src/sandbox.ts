// example 1
let greet: (a: string, b: string) => void; // Function Signatures
greet = (name: string, age: string) => {
  console.log(`${name} is ${age} old`);
};
greet("urban", "20");
