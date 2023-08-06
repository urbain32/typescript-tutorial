"use strict";
//  how to slve typescript not displaying href
const anchor = document.querySelector("a");
// console.log(anchor.href); // this will be an error coz anchor might be null
// solution 1
if (anchor) {
    console.log(anchor.href);
}
// solution 2
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// solution 3 adding ! const anchor = document.querySelector("a")!;
