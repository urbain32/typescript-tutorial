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
