import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContactRoutingModule } from './app-contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactDefaultComponent } from './components/contact-default/contact-default.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { MatButtonModule } from "@angular/material/button";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MatDividerModule } from "@angular/material/divider";
import { AppCustomErrorModule } from "../app-custom-error/app-custom-error.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ContactListComponent } from '../app-admin-panel/components/contact-list/contact-list.component';
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { ConfirmDialogModule } from "primeng/confirmdialog";


@NgModule({
  declarations: [
    ContactComponent,
    ContactDefaultComponent,
    AboutUsComponent,
    ContactListComponent
  ],
  imports: [
    CommonModule,
    AppContactRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    MatButtonModule,
    MatDividerModule,
    AppCustomErrorModule,
    MatFormFieldModule,
    CardModule,
    TableModule,
    ConfirmDialogModule
  ]
})
export class AppContactModule { }
