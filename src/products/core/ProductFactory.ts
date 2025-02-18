import { Product } from './Product'; 

export class ProductFactory {
    createProduct(name: string, price: number): Product {
        return new Product(name, price);
    }
}