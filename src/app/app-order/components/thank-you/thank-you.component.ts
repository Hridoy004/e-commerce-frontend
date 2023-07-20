import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { User } from "../../../app-shared-services/interfaces/user.interface";
import { Order } from "../../../app-admin-orders/interfaces/order.interface";
import { OrderService } from "../../../app-admin-orders/services/order.service";
import { MessageService } from "primeng/api";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  // @ts-ignore
  order: Order;
  orderStatuses = [];
  selectedStatus: any;

  constructor(private orderService: OrderService,
              private messageService: MessageService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._getOrder();
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderService
          .GetOrderId(params['id'])
          .subscribe((order) => {
            this.order = order;
            console.log(order);

          });
      }
    });
  }


}
