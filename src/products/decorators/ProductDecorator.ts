import { Product } from '../core/Product';

export class ProductDecorator {
    constructor(protected product: Product) {}

    getName(): string {
        return this.product.getName(); 
    }

    getPrice(): number {
        return this.product.getPrice();
    }
}

export class GiftWrappedProduct extends ProductDecorator {
    getPrice(): number {
        return super.getPrice() + 5;
    }
}