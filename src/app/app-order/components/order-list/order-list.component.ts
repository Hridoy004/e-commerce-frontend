import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../services/order.service";
import { ConfirmationService, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { Order } from "../../interfaces/order.interface";
import { ORDER_STATUS } from "../../../app-e-eommerce-constants/e-commerce-constants";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  orderStatus = ORDER_STATUS;

  constructor(private ordersService: OrderService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.GetOrders().subscribe((orders) => {
      // @ts-ignore
      this.orders = orders;
    });
  }

  showOrder(orderId: string) {
    this.router.navigateByUrl(`/a/o/order-list/${orderId}`);
  }

}
