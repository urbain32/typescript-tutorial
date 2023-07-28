// explicit types
var character;
var age;
var isLogin;
// we can't say
// age = "10"; coz age is number
// isLogin=23 coz isLogin is boolean
// for arrays
var ninjas;
// we can't say declare the array in any other type which is not a string
// ninjas = ['urban',10] coz 10 is a number
// if we want to push on the array we have to declare
// ninjas.push("string");
var numbers = [];
numbers.push(2);
// union arrays
var mixed = [];
mixed.push("urban");
mixed.push(12);
mixed.push(false);
