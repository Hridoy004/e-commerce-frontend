import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app-authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'a',
    loadChildren: () => import('../app-admin-panel/app-admin.module').then(m => m.AppAdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRootRoutingModule { }
