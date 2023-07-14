import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefalutComponent } from "./components/home-defalut/home-defalut.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProductListComponent } from "../app-products/components/product-list/product-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeDefalutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'category/:categoryid',
        component: ProductListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLandingRoutingModule {
}
