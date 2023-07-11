import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProductRoutingModule } from './app-product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AppCustomErrorModule } from "../app-custom-error/app-custom-error.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PaginatorModule } from "primeng/paginator";
import { FlexModule } from "@angular/flex-layout";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { EditorModule } from "primeng/editor";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductsFormComponent
  ],
    imports: [
        CommonModule,
        AppProductRoutingModule,
        ToastModule,
        CardModule,
        ToolbarModule,
        ButtonModule,
        TableModule,
        ConfirmDialogModule,
        ReactiveFormsModule,
        AppCustomErrorModule,
        MatFormFieldModule,
        PaginatorModule,
        FlexModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        EditorModule
    ]
})
export class AppProductModule { }
