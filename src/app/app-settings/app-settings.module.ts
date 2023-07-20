import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { SettingsAccountComponent } from './components/settings-account/settings-account.component';
import { SettingsDefaultComponent } from './components/settings-default/settings-default.component';
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { ReactiveFormsModule } from "@angular/forms";
import { AppCustomErrorModule } from "../app-custom-error/app-custom-error.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { InputTextModule } from "primeng/inputtext";


@NgModule({
  declarations: [
    SettingsAccountComponent,
    SettingsDefaultComponent
  ],
    imports: [
        CommonModule,
        AppSettingsRoutingModule,
        CardModule,
        TableModule,
        ReactiveFormsModule,
        AppCustomErrorModule,
        MatFormFieldModule,
        InputTextModule
    ]
})
export class AppSettingsModule { }
