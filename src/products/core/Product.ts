export class Product {
    constructor(public name: string, public price: number) {}

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

   
}