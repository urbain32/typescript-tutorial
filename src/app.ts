// <form class="new-item-form">
// const form = document.querySelector("form")!; this ts will know it coz form is an html element
//when we use a class the typpe script  diplay it as an elemnt because it doesnt no the type  tos olve it we use as HTMLFormElement
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);
// adding the inputs using their id
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// adding an event listiner to display our form values

form.addEventListener("submit", (e: Event) => {
  e.preventDefault(); // prevent data from auto refreshing after submit
  // if we want amount to be displayed as a number not a string we use valueAsNumber
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
