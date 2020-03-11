import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from './configClasses.repository';
import { Supplier } from './supplier.model';

const productsUrl = "/api/products";
const supplierUrl = "/api/suppliers";

type productMetadata = {
    data: Product[],
    categories: string[],
}

@Injectable()
export class Repository {

    product: Product;
    products: Product[];
    suppliers: Supplier[] = [];
    filter: Filter = new Filter();
    categories: string[] = [];

    constructor(private http: HttpClient) {
        // this.filter.category = "soccer";
        this.filter.related = true;
        // this.getProducts();
    }
    // constructor() {
    //     this.product = JSON.parse(document.getElementById("data").textContent);
    // }
    // product: Product;

    // get product(): Product {
    //     console.log("Product data received");
    //     return this.productData;
    // }
    getSuppliers() {
        this.http.get<Supplier[]>(supplierUrl)
            .subscribe(sups => this.suppliers = sups);

    }
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
        url += "&metadata=true";

        this.http.get<productMetadata>(url)
            .subscribe(md => {
                this.products = md.data;
                this.categories = md.categories;
            });
        // this.http.get<Product[]>(url).subscribe(prods => this.products = prods);
    }
    // getProducts(related = false) {
    //     this.http.get<Product[]>(`${productsUrl}?related=${related}`)
    //         .subscribe(prods => this.products = prods);
    // }
    createProduct(prod: Product) {
        let data = {
            name: prod.name, category: prod.category, description: prod.description,
            price: prod.price, supplier: prod.supplier ? prod.supplier.supplierId : 0
        }

        this.http.post<number>(productsUrl, data)
            .subscribe(id => {
                prod.productId = id;
                this.products.push(prod);
            });
    }

    createProductAndSuppler(prod: Product, supp: Supplier) {
        let data = {
            name: supp.name, city: supp.city, state: supp.state
        };

        this.http.post<number>(supplierUrl, data)
            .subscribe(id => {
                supp.supplierId = id;
                prod.supplier = supp;
                this.suppliers.push(supp);
                if (prod != null) {
                    this.createProduct(prod);
                }
            })
    }

    replaceProduct(prod: Product) {
        let data = {
            name: prod.name, category: prod.category, description: prod.description,
            price: prod.price, supplier: prod.supplier ? prod.supplier.supplierId : 0
        };
        this.http.put(`${productsUrl}/${prod.productId}`, data)
            .subscribe(() => this.getProducts());
    }

    replaceSupplier(supp: Supplier) {
        let data = {
            name: supp.name, city: supp.city, state: supp.state
        };
        this.http.put(`${supplierUrl}/${supp.supplierId}`, data)
            .subscribe(() => this.getProducts());
    }

    updateProduct(id: number, changes: Map<string, any>) {
        let patch = [];
        changes.forEach((value, key) =>
            patch.push({ op: "replace", path: key, value: value }));

        this.http.patch(`${productsUrl}/${id}`, patch)
            .subscribe(() => this.getProducts());
    }

    deleteProduct(id: number) {
        this.http.delete(`${productsUrl}/${id}`)
            .subscribe(() => this.getProducts());
    }
    deleteSupplier(id: number) {
        this.http.delete(`${supplierUrl}/${id}`)
            .subscribe(() => {
                this.getSuppliers();
                this.getProducts();
            });
    }
}