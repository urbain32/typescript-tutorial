// function declaration
let names: Function;
names = () => {
  console.log("first name");
};
// if we say names = 'kkioko' this will be an error coz names has been defined as  function

// best way to declare a function

const sum = (a: number, b: number) => {
  console.log(a + b);
};
// sum(2, "2"); this will not work coz b is a string
sum(2, 2);
