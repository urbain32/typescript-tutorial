// modules help us create separate component
// that we can import to us them in differnt typescript component
// exporting out Invoice classes to re-use it in app.ts
import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  // when we use format this.detais we can access details because it is inside the class
  format() {
    return `${this.client} owes $${this.amount} for this ${this.details}`;
  }
}
