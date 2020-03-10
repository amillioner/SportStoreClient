import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from './configClasses.repository';

const productsUrl = "/api/products";

@Injectable()
export class Reporsitory {

    product: Product;
    products: Product[];
    filter: Filter = new Filter();

    constructor(private http: HttpClient) {
        this.filter.category = "soccer";
        this.filter.related = true;
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
    getProducts() {
        let url = `${productsUrl}?related=${this.filter.related}`;
        if (this.filter.category) {
            url += `&category=${this.filter.category}`;
        }
        if (this.filter.search) {
            url += `&search=${this.filter.search}`;
        }
        this.http.get<Product[]>(url).subscribe(prods => this.products = prods);
    }
    // getProducts(related = false) {
    //     this.http.get<Product[]>(`${productsUrl}?related=${related}`)
    //         .subscribe(prods => this.products = prods);
    // }
}