import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("urban", "networking", 550);
// // creating an array using HasFormatter
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// docs.forEach((inv) => {
//   console.log(inv.format());
// });
// const invOne = new Invoice("mario", " on the work done on the website", 250);
// const invTwo = new Invoice("luigi", "on the work done on the website", 300);
// console.log(invOne, invTwo);
// // putting our invoice in an array
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // cycling our invoice using forEach
// // outside the class we cant because is out side the classof invoice inv.details
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector(".new-item-form");
// adding the inputs using their id
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// using our interface in a form
let doc;
// adding an event listiner to display our form values
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
