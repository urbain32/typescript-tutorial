import { Invoice } from "./classes/Invoice.js";
import { ListTemplates } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// adding the inputs using their id
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// displaying list template instance of ul
const ul = document.querySelector("ul");
const list = new ListTemplates(ul);
// adding an event listiner to display our form values
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // using our interface in a form to use hasFormatter
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // calling our list doc=item,heading=value,pos=end
    list.render(doc, type.value, "end");
});
// GENERICS when we use generics
// we can also extends by saying what type we want
// we can also say which type object we want
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
// now name in our object cant be a number
let docOne = addUID({ name: "yoshi", age: 20 });
console.log(docOne.name); // now the error goes away
//  now let data be an object
const docTwo = {
    uid: 1,
    resourceName: "string",
    data: { name: "yoshi", age: 20 },
};
//  now let data be an string
const docThree = {
    uid: 1,
    resourceName: "urban",
    data: "string",
};
