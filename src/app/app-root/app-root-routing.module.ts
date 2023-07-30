import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from "./components/error404/error404.component";
import { LoginAuthorizeComponent } from "./components/login-authorize/login-authorize.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app-landing/app-landing.module').then(m => m.AppLandingModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('../app-authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'a',
    loadChildren: () => import('../app-admin-panel/app-admin.module').then(m => m.AppAdminModule),
    canActivate: [LoginAuthorizeComponent]
  },
  {
    path: 'order',
    loadChildren: () => import('../app-order/app-order.module').then(m => m.AppOrderModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
