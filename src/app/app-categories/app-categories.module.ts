import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppCategoriesRoutingModule } from "./app-categories-routing.module";
import { MatCardModule } from "@angular/material/card";
import { FlexModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ButtonModule } from "primeng/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AppCustomErrorModule } from "../app-custom-error/app-custom-error.module";
import { MatInputModule } from "@angular/material/input";
import { InputTextModule } from "primeng/inputtext";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { ToastModule } from "primeng/toast";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { TableModule } from "primeng/table";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CategoriesFormComponent } from "./components/categories-form/categories-form.component";

@NgModule({
  declarations: [
    CategoriesListComponent,
    CategoriesFormComponent,
  ],
  imports: [
    CommonModule,
    AppCategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
export class AppCategoriesModule {
}
