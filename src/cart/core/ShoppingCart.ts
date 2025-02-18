import { Observer } from '../observer/Observer';
import { DiscountStrategy } from '../../discounts/strategies/DiscountStrategy';


export class ShoppingCart {
    private static instance: ShoppingCart;
    private items: { name: string; price: number }[] = [];
    private totalPrice: number = 0;
    private observers: Observer[] = []; 

    private constructor() {}

    static getInstance(): ShoppingCart {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }

    addItem(name: string, price: number) {
        this.items.push({ name, price });
        this.totalPrice += price;
        this.notifyObservers();
    }

    removeItem(name: string) {
        const index = this.items.findIndex(item => item.name === name);
        if (index !== -1) {
            this.totalPrice -= this.items[index].price;
            this.items.splice(index, 1);
            this.notifyObservers();
        }
    }

    applyDiscount(discountStrategy: DiscountStrategy) {
        this.totalPrice = discountStrategy.apply(this.totalPrice);
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this));
    }

    getTotal(): number {
        return this.totalPrice;
    }
}