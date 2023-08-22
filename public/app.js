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
