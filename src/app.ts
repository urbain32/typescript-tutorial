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
  // using tuples in this form will help not to just enter any type

  let values = [tofrom.value, details.value, amount.valueAsNumber];

  // using our interface in a form to use hasFormatter
  let doc: HasFormatter;
  if (type.value === "invoice") {
    // always remeber spread operator must use tuple to know which type we be passed in every single field
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  // calling our list doc=item,heading=value,pos=end
  list.render(doc, type.value, "end");
});

// GENERICS when we use generics
// we can also extends by saying what type we want
// we can also say which type object we want
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
// now name in our object cant be a number
let docOne = addUID({ name: "yoshi", age: 20 });
console.log(docOne.name); // now the error goes away

// using generics with interfaces
// let say we want our data to be type  we want we have to use genercis
// using Enum change string to number and then
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

//  now let data be an object
const docTwo: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.BOOK,
  data: { name: "yoshi", age: 20 },
};

//  now let data be an string
const docThree: Resource<string> = {
  uid: 1,
  resourceName: ResourceType.DIRECTOR,
  data: "string",
};

//  now let data be a string of arrays
const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: ResourceType.PERSON,
  data: ["string"],
};
console.log(docTwo, docThree, docFour);

// tuples

// before when we define an array the types we give to that are will not matter if we want to change them
// example
let arr = ["yoshi", 25, false];
arr[0] = false; // this will change yoshi to a false

// using tuples
let tup: [string, number, boolean] = ["yoshi", 25, false];
// same here we will get an error if we trying to change the index 0 to another type which is not a string
tup[0] = "urban";
