import { Component } from '@angular/core';
import { Reporsitory } from './models/repository';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SportsStore';
  constructor(private repo: Reporsitory) {
  }
  get product(): Product {
    return this.repo.product;
  }
}
