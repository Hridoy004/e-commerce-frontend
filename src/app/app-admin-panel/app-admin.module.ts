import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatCardModule } from "@angular/material/card";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { FlexModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    ShellComponent,
    SidebarComponent,
    DashboardComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    MatCardModule,
    FlexModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ButtonModule,
  ]
})
export class AppAdminModule { }
