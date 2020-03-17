import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductSelectionComponent } from './store/productSelection.component';
import { CartSummaryComponent } from './store/cartSummary.component';
import { CategoryFilterComponent } from './store/categoryFilter.component';
import { PaginationComponent } from './store/pagination.component';
import { ProductListComponent } from './store/productList.component';
import { RatingsComponent } from './store/ratings.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckoutDetailsComponent } from './store/checkout/checkoutDetails.component';
import { CheckoutPaymentComponent } from './store/checkout/checkoutPayment.component';
import { CheckoutSummaryComponent } from './store/checkout/checkoutSummary.component';
import { OrderConfirmationComponent } from './store/checkout/orderConfirmation.component';

@NgModule({
  declarations: [CartSummaryComponent, CategoryFilterComponent,
    PaginationComponent, ProductListComponent, RatingsComponent,
    ProductSelectionComponent, CartDetailComponent,
    CheckoutDetailsComponent, CheckoutPaymentComponent, CheckoutSummaryComponent, OrderConfirmationComponent],
  imports: [BrowserModule, FormsModule, RouterModule],
  exports: [ProductSelectionComponent]
})
export class StoreModule { }
