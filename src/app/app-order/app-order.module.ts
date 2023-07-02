import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOrderRoutingModule } from './app-order-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from "@angular/forms";
import { FlexModule } from "@angular/flex-layout";
import { MatGridListModule } from "@angular/material/grid-list";


@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent
  ],
    imports: [
        CommonModule,
        AppOrderRoutingModule,
        ToastModule,
        TableModule,
        TagModule,
        ConfirmDialogModule,
        CardModule,
        FieldsetModule,
        DropdownModule,
        FormsModule,
        FlexModule,
        MatGridListModule
    ]
})
export class AppOrderModule { }
