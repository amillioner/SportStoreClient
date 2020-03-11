import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';
import { ProductTableComponent } from './structure/productTable.component';
import { CategoryFilterComponent } from './structure/CategoryFilterComponent';
import { ProductDetailComponent } from './structure/productDetail.component';
import { ProductListComponent } from './store/productList.component';

@NgModule({
  declarations: [
    AppComponent, ProductTableComponent, 
    CategoryFilterComponent, ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ModelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
