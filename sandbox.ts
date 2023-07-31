//  using any type
let age: any;
age = 25;
console.log(age);
age = true;
console.log(age);
age = "25";
console.log(age);

// any type on an array
let mixed: any[] = [];
mixed.push("mario");
mixed.push(true);
mixed.push(45);
console.log(mixed);
