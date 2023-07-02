import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from "./components/shell/shell.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersComponent } from "./components/users/users.component";

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
        path: 'user',
        component: UsersComponent
      },
      {
        path: 'c',
        loadChildren: () => import('../app-categories/app-categories.module').then(m => m.AppCategoriesModule)
      },
      {
        path: 'p',
        loadChildren: () => import('../app-product/app-product.module').then(m => m.AppProductModule)
      },
      {
        path: 'o',
        loadChildren: () => import('../app-order/app-order.module').then(m => m.AppOrderModule)
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
