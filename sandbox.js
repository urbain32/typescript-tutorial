var character = "urban";
// in typescrit the type we give a variable can not be change eg:
// character=20 this show character is assignedas a string
var age = 20;
// same ting here if we make age another type it will not work
// age = '20 ' asssigned to type number
var isBlack = false;
//isBlack = 'yes'
// now let use the same logic in a function t
var circle = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circle("hello")); // this will show NaN in the browser because diameter is equal to hello
console.log(circle(6)); // this will work because now the diameter is a number
