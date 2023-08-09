// modules help us create separate component
// that we can import to us them in differnt typescript component

// exporting out Invoice classes to reuse it in app.ts
export class Invoice {
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
