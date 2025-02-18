export interface DiscountStrategy {
    apply(totalPrice: number): number;
}

export class NoDiscount implements DiscountStrategy {
    apply(totalPrice: number): number {
        return totalPrice;
    }
}

export class BlackFridayDiscount implements DiscountStrategy {
    apply(totalPrice: number): number {
        return totalPrice * 0.5;
    }
}

export class WeekendDiscount implements DiscountStrategy {
    apply(totalPrice: number): number {
        return totalPrice * 0.9;
    }
}