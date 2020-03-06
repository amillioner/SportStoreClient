import { Product } from './product.model';

export class Reporsitory {
    constructor() {
        this.product = JSON.parse(document.getElementById("data").textContent);
    }
    product: Product;
}