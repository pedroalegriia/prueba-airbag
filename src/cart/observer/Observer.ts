import { ShoppingCart } from '../../cart/core/ShoppingCart'; // Importamos ShoppingCart

export interface Observer {
    update(cart: ShoppingCart): void;
}