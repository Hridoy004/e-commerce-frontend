import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOrderRoutingModule } from './app-order-routing.module';
import { CartIconComponent } from "./components/cart-icon/cart-icon.component";
import { BadgeModule } from "primeng/badge";
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { MatButtonModule } from "@angular/material/button";
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { DropdownModule } from "primeng/dropdown";


@NgModule({
    declarations: [
        CartIconComponent,
        CartPageComponent,
        OrderSummaryComponent,
        ThankYouComponent
    ],
    exports: [
        CartIconComponent,
        OrderSummaryComponent
    ],
  imports: [
    CommonModule,
    AppOrderRoutingModule,
    BadgeModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    MatButtonModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    ReactiveFormsModule,
  ]
})
export class AppOrderModule { }
