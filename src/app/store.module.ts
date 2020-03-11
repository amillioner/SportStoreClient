import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductSelectionComponent } from './store/productSelection.component';
import { CartSummaryComponent } from './store/cartSummary.component';
import { CategoryFilterComponent } from './store/categoryFilter.component';
import { PaginationComponent } from './store/pagination.component';
import { ProductListComponent } from './store/productList.component';
import { RatingsComponent } from './store/ratings.component';

@NgModule({
  declarations: [CartSummaryComponent, CategoryFilterComponent,
    PaginationComponent, ProductListComponent, RatingsComponent,
    ProductSelectionComponent],
  imports: [BrowserModule],
  exports: [ProductSelectionComponent]
})
export class StoreModule { }
