import { Invoice } from "./classes/Invoice.js";
import { ListTemplates } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// adding the inputs using their id
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
// displaying list template instance of ul
const ul = document.querySelector("ul")!;
const list = new ListTemplates(ul);
// adding an event listiner to display our form values
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  // using our interface in a form to use hasFormatter
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  // calling our list doc=item,heading=value,pos=end
  list.render(doc, type.value, "end");
});

// GENERICS when we use generics
// we can also extends by saying what type we want
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: "urban", age: 20 });
let docTwo = addUID("urban"); // because we said is an object we cant use string
console.log(docOne.name); // now the error goes away
