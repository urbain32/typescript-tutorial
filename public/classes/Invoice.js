// modules help us create separate component
// that we can import to us them in differnt typescript component
// exporting out Invoice classes to re-use it in app.ts
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // when we use format this.detais we can access details because it is inside the class
    format() {
        return `${this.client} owes $${this.amount} for this ${this.details}`;
    }
}
