import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProductsRoutingModule } from './app-products-routing.module';
import { ProductsSearchComponent } from './components/products-search/products-search.component';


@NgModule({
  declarations: [
    ProductsSearchComponent
  ],
  exports: [
    ProductsSearchComponent
  ],
  imports: [
    CommonModule,
    AppProductsRoutingModule
  ]
})
export class AppProductsModule { }
