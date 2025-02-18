import { ShoppingCart } from "./cart/core/ShoppingCart";
import { ProductFactory } from "./products/core/ProductFactory";
import { BlackFridayDiscount, WeekendDiscount } from './discounts/strategies/DiscountStrategy';
import { CartObserver } from "./cart/observer/CartObserver";
import { GiftWrappedProduct } from "./products/decorators/ProductDecorator";

const cart = ShoppingCart.getInstance();
const observer = new CartObserver();
const isBlackFriday = true;
cart.addObserver(observer);

const factory = new ProductFactory();
const apple = factory.createProduct("Apple", 10);
const banana = factory.createProduct("Banana", 20);

cart.addItem(apple.getName(), apple.getPrice());
cart.addItem(banana.getName(), banana.getPrice());

console.log(`Agregados al carrito:`);
console.log(`- ${apple.getName()} - $${apple.getPrice()}`);
console.log(`- ${banana.getName()} - $${banana.getPrice()}`);

if (isBlackFriday) {
    cart.applyDiscount(new BlackFridayDiscount());
} else {
    cart.applyDiscount(new WeekendDiscount());
}

console.log(`Total price: $${cart.getTotal()}`);

const wrappedApple = new GiftWrappedProduct(apple);
console.log(`Precio de Apple envuelto: $${wrappedApple.getPrice()}`);