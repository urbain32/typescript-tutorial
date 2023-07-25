const character = "mario";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((input) => {
  console.log(input);
});

// for this typescript to be seen in any browser it needs to be compiled in js
// using this code in terminal: tsc.cmd or tsc (name of the typescript file)
