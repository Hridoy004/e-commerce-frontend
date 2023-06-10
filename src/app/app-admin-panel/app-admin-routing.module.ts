import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from "./components/shell/shell.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CategoriesFormComponent } from "../app-categories/components/categories-form/categories-form.component";
import { CategoriesListComponent } from "../app-categories/components/categories-list/categories-list.component";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'categories-form',
        component: CategoriesFormComponent
      },
      {
        path: 'categories-list',
        component: CategoriesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule {
}
