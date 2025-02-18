Decisiones de Diseño
1. Uso de Clases y Objetos.
Se eligió un enfoque orientado a objetos para modelar los productos y sus comportamientos.
Esto permite encapsular la lógica relacionada con cada entidad y facilita la extensión del sistema en el futuro.
* Clases:
    * Product: Representa un producto con un nombre y un precio.
    * ProductFactory: Encargada de crear instancias de Product.
    * DiscountStrategy: Interfaz para aplicar diferentes estrategias de descuento.
    * BlackFridayDiscount y WeekendDiscount: Implementaciones concretas de la interfaz DiscountStrategy.
      
2. Patrón de Decorador
Se implementó el patrón de diseño Decorador para permitir características adicionales a los productos sin modificar su estructura original.

3. Observador
Se implementó el patrón de diseño Observador para notificar a los observadores sobre cambios en el carrito de compras.
