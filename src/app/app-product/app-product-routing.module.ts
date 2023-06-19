import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductsFormComponent } from "./components/products-form/products-form.component";

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-form',
    component: ProductsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProductRoutingModule { }
