//  using any type
var age;
age = 25;
console.log(age);
age = true;
console.log(age);
age = "25";
console.log(age);
age = { number: "25" };
console.log(age);
// any type on an array
var mixed = [];
mixed.push("mario");
mixed.push(true);
mixed.push(45);
console.log(mixed);
// any type on an object
var ninja;
ninja = { age: "25", name: true };
console.log(ninja);
var ninjas = [
    { id: 1, a: 0 },
    { id: 2, a: 4 },
    { id: 3, a: 5 },
];
var b = ninjas === null || ninjas === void 0 ? void 0 : ninjas.reduce(function (total, row) { return total + row.a; }, 0);
var c = b * 0.18;
var d = b - c;
console.log("resultb", b, c, d);
