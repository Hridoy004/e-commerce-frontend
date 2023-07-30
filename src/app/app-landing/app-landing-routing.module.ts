import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefalutComponent } from "./components/home-defalut/home-defalut.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProductListComponent } from "../app-products/components/product-list/product-list.component";
import { ProductDetailsComponent } from "../app-products/components/product-details/product-details.component";
import { CartPageComponent } from "../app-order/components/cart-page/cart-page.component";
import { ThankYouComponent } from "../app-order/components/thank-you/thank-you.component";
import { CheckoutComponent } from "../app-order/components/checkout/checkout.component";
import { ViewOrderComponent } from "../app-order/components/view-order/view-order.component";

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
      },
      {
        path: 'products/:productid',
        component: ProductDetailsComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'success',
        component: ThankYouComponent
      },
      {
        path: 'view-order',
        component: ViewOrderComponent
      },
      {
        path: 'view-order/:id',
        component: ViewOrderComponent
      },
      {
        path: 'profile',
        loadChildren: () => import('../app-settings/app-settings.module').then(m => m.AppSettingsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../app-contact/app-contact.module').then(m => m.AppContactModule)
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
