import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOrderRoutingModule } from './app-order-routing.module';
import { CartIconComponent } from "./components/cart-icon/cart-icon.component";
import { BadgeModule } from "primeng/badge";
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        CartIconComponent,
        CartPageComponent
    ],
    exports: [
        CartIconComponent
    ],
  imports: [
    CommonModule,
    AppOrderRoutingModule,
    BadgeModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
  ]
})
export class AppOrderModule { }
