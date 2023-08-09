"use strict";
// classes
class Invoice {
    // readonly client: string; //this means we can read it both inside the class and outside but can never be modified
    // private details: string;
    // public amount: number;
    constructor(
    // this can only be possible if we assign  readonly,private or public else we get an error
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // and inside here we dot need to use this
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    // when we use format this.detais we can access details because it is inside the class
    format() {
        return `${this.client} owes $${this.amount} for this ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("luigi", "work on luigi website", 300);
console.log(invOne, invTwo);
// private
// putting our invoice in an array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// cycling our invoice using forEach
// outside the class we cant because is out side the classof invoice inv.details
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
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
