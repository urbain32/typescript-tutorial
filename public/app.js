"use strict";
// <form class="new-item-form">
// const form = document.querySelector("form")!; this ts will know it coz form is an html element
//when we use a class the typpe script  diplay it as an elemnt because it doesnt no the type  tos olve it we use as HTMLFormElement
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// adding the inputs using their id
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// adding an event listiner to display our form values
form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent data from auto refreshing after submit
    console.log(type.value, tofrom.value, details.value, amount.value);
});
