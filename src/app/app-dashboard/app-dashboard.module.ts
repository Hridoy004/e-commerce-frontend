import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDashboardRoutingModule } from './app-dashboard-routing.module';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
  ],
    imports: [
        CommonModule,
        AppDashboardRoutingModule,
        MatCardModule
    ]
})
export class AppDashboardModule { }
