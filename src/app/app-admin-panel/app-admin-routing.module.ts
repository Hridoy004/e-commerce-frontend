import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from "./components/shell/shell.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UsersComponent } from "./components/users/users.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

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
        path: 'contact-list',
        component: ContactListComponent
      },
      {
        path: 'c',
        loadChildren: () => import('../app-admin-categories/app-categories.module').then(m => m.AppCategoriesModule)
      },
      {
        path: 'p',
        loadChildren: () => import('../app-admin-products/app-product.module').then(m => m.AppProductModule)
      },
      {
        path: 'o',
        loadChildren: () => import('../app-admin-orders/app-order.module').then(m => m.AppOrderModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule {
}
