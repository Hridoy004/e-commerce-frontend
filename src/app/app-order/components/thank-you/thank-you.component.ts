import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../services/order.service";
import { CartService } from "../../../app-shared-services/services/cart.service";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {


  constructor(private orderService: OrderService,
              private cartService: CartService) {
  }

  ngOnInit() {
    const orderData = this.orderService.GetCachedOrderData();

    this.orderService.CreateOrder(orderData).subscribe((response) => {
      this.cartService.emptyCart();
      this.orderService.RemoveCachedOrderData();
    });
  };

}
