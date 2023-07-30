import { Component, OnInit } from '@angular/core';
import { Order } from "../../../app-admin-orders/interfaces/order.interface";
import { OrderService } from "../../../app-admin-orders/services/order.service";
import { MessageService } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {

  order: any;
  orderId: Order[] = [];
  oid: any;

  constructor(private orderService: OrderService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) {

  }


  ngOnInit(): void {
    /*const orderId = '64c5d86b8e8a64c758658786'*/
    /*this.getOrder(orderId);*/
    this.route.params.subscribe(params => {
      console.log('params', params);
      if (params['id']) {
        console.log('id', params['id']);
        // Do something with the id parameter
      }
    });
    this._getOrders();
  }

  private _getOrders() {
    this.orderService.GetOrders().subscribe((orders: any) => {
      this.orderId = orders;
      this.oid = this.orderId[0].id
      console.log(this.oid);
      this.orderService.OrderId(this.oid).subscribe((response: any) => {
          console.log(response)
          this.order = response;
        }
      );
    });
  }
}
