import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCategoriesRoutingModule } from './app-categories-routing.module';
import { CategoriesListComponent } from '../app-admin-panel/components/categories-list/categories-list.component';
import { MatCardModule } from "@angular/material/card";


@NgModule({
  declarations: [
    CategoriesListComponent,
  ],
    imports: [
        CommonModule,
        AppCategoriesRoutingModule,
        MatCardModule
    ]
})
export class AppCategoriesModule { }
