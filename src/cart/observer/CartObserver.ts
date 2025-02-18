import { Observer } from './Observer'; 
import { ShoppingCart } from '../core/ShoppingCart';

export class CartObserver implements Observer {
    update(cart: ShoppingCart): void {
        console.log(`El total del carrito es: ${cart.getTotal()}`);
    }
}