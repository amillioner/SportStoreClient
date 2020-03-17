import { Component } from "@angular/core";
import { Cart } from '../models/cart.model';

@Component({
    templateUrl: "cardDetail.component.html"
})

export class CartDetailComponent {
    constructor(public cart: Cart) { }
}