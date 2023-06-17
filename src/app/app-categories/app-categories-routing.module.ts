import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesFormComponent } from "./components/categories-form/categories-form.component";
import { CategoriesListComponent } from "./components/categories-list/categories-list.component";

const routes: Routes = [
  {
    path: 'categories-form',
    component: CategoriesFormComponent
  },
  {
    path: 'categories-form/:id',
    component: CategoriesFormComponent
  },
  {
    path: 'categories-list',
    component: CategoriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppCategoriesRoutingModule {
}
