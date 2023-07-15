import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProductsRoutingModule } from './app-products-routing.module';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { FlexModule } from "@angular/flex-layout";
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductItemsComponent } from './components/product-items/product-items.component';
import { ButtonModule } from "primeng/button";
import { ProductListComponent } from './components/product-list/product-list.component';
import { CheckboxModule } from "primeng/checkbox";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { InputNumberModule } from "primeng/inputnumber";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { AppSharedModule } from "../app-shared/app-shared.module";


@NgModule({
  declarations: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductItemsComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
    exports: [
        ProductsSearchComponent,
        CategoriesBannerComponent,
        FeaturedProductsComponent
    ],
  imports: [
    CommonModule,
    AppProductsRoutingModule,
    FlexModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    MatCheckboxModule,
    InputNumberModule,
    RatingModule,
    RippleModule,
    AppSharedModule
  ]
})
export class AppProductsModule { }
