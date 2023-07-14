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


@NgModule({
  declarations: [
    ProductsSearchComponent,
    CategoriesBannerComponent,
    FeaturedProductsComponent,
    ProductItemsComponent,
    ProductListComponent
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
        MatCheckboxModule
    ]
})
export class AppProductsModule { }
