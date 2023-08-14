import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("urban", "networking", 550);
const invOne = new Invoice("mario", " on the work done on the website", 250);
const invTwo = new Invoice("luigi", "on the work done on the website", 300);
console.log(invOne, invTwo);
// putting our invoice in an array
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// cycling our invoice using forEach
// outside the class we cant because is out side the classof invoice inv.details
invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// adding the inputs using their id
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// adding an event listiner to display our form values
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
