import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatCardModule } from "@angular/material/card";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesListComponent } from '../app-categories/components/categories-list/categories-list.component';
import { FlexModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ButtonModule } from "primeng/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppCustomErrorModule } from "../app-custom-error/app-custom-error.module";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { InputTextModule } from "primeng/inputtext";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { CategoriesFormComponent } from '../app-categories/components/categories-form/categories-form.component';
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { FooterComponent } from "../app-landing/components/footer/footer.component";


@NgModule({
  declarations: [
    ShellComponent,
    SidebarComponent,
    DashboardComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
    FooterComponent,
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
    MatFormFieldModule,
    AppCustomErrorModule,
    ReactiveFormsModule,
    MatInputModule,
    InputTextModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    ToastModule,
    CardModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,

  ]
})
export class AppAdminModule {
}
