import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('../app-admin-panel/app-admin.module').then(m => m.AppAdminModule)
  },
  {
    path: 'order',
    loadChildren: () => import('../app-order/app-order.module').then(m => m.AppOrderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
