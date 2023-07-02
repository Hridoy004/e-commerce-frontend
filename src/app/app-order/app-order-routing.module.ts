import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from "./components/order-list/order-list.component";
import { OrderDetailsComponent } from "./components/order-details/order-details.component";


const routes: Routes = [
  {
    path: 'order-list',
    component: OrderListComponent
  },
  {
    path: 'order-list/:id',
    component: OrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOrderRoutingModule { }
