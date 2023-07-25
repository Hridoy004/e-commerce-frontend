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


@NgModule({
  declarations: [
    ContactComponent,
    ContactDefaultComponent,
    AboutUsComponent
  ],
    imports: [
        CommonModule,
        AppContactRoutingModule,
        ReactiveFormsModule,
        InputTextModule,
        MatButtonModule,
        MatDividerModule
    ]
})
export class AppContactModule { }
