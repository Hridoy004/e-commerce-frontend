import { Component, OnInit } from '@angular/core';
import { Order } from "../../interfaces/order.interface";
import { OrderService } from "../../services/order.service";
import { MessageService } from "primeng/api";
import { ActivatedRoute } from "@angular/router";
import { ORDER_STATUS } from "../../../app-e-eommerce-constants/e-commerce-constants";

@Component({
  selector: 'app-admin-orders-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  // @ts-ignore
  order: Order;
  orderStatuses = [];
  selectedStatus: any;

  constructor(private orderService: OrderService,
              private messageService: MessageService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._mapOrderStatus();
    this._getOrder();
  }

  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderService
          .GetOrderId(params['id'])
          .subscribe((order) => {
            this.order = order;
            // @ts-ignore
            this.selectedStatus = order.status;
          });
      }
    });
  }

  private _mapOrderStatus() {
    // @ts-ignore
    this.orderStatuses = Object.keys(ORDER_STATUS).map((key) => {
      return {
        id: key,
        // @ts-ignore
        name: ORDER_STATUS[key].label
      };
    });
  }

  onStatusChange($event: any) {
    console.log($event)
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.orderService
        .UpdateOrder({status: $event.value}, id)
        .subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Order is updated!'
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Order is not updated!'
            });
          }
        );
    })
  }
}
