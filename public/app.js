"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for this ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("luigi", "work on luigi website", 300);
console.log(invOne, invTwo);
// putting our invoice in an array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = "urban";
invTwo.amount = 400;
console.log(invOne, invTwo);
const form = document.querySelector(".new-item-form");
// adding the inputs using their id
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// adding an event listiner to display our form values
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
