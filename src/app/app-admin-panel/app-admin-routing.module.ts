import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from "./components/shell/shell.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";
import { AdminCategoriesFormComponent } from "./components/admin-categories-form/admin-categories-form.component";

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
        path: 'categories',
        component: CategoriesListComponent
      },
      {
        path: 'categories/form',
        component: AdminCategoriesFormComponent
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
