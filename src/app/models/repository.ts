import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const productsUrl = "/api/products";

@Injectable()
export class Reporsitory {

    product: Product;
    products: Product[];

    constructor(private http: HttpClient) {
        this.getProducts();
    }
    // constructor() {
    //     this.product = JSON.parse(document.getElementById("data").textContent);
    // }
    // product: Product;

    // get product(): Product {
    //     console.log("Product data received");
    //     return this.productData;
    // }
    getProduct(id: number) {
        this.http.get<Product>(`${productsUrl}/${id}`)
            .subscribe(p => this.product = p);
    }
    getProducts(related = false) {
        this.http.get<Product[]>(`${productsUrl}?related=${related}`)
            .subscribe(prods => this.products = prods);
    }
}