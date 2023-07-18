import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from "rxjs";
import { Router } from "@angular/router";
import { CartService } from "../../../app-shared-services/services/cart.service";
import { OrderService } from "../../../app-admin-orders/services/order.service";
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {
  endSubs$: Subject<any> = new Subject();
  totalPrice: number = 0;
  isCheckout = false;

  constructor(private router: Router,
              private cartService: CartService,
              private ordersService: OrderService) {
    this.router.url.includes('checkout') ? (this.isCheckout = true) : (this.isCheckout = false);
  }

  ngOnInit(): void {
    this._getOrderSummary();
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  _getOrderSummary() {
    this.cartService.cart$.pipe(takeUntil(this.endSubs$)).subscribe((cart) => {
      this.totalPrice = 0;
      if (cart) {
        cart.items?.map((item) => {
          this.ordersService
            // @ts-ignore
            .GetProductsId(item.productId)
            .pipe(take(1))
            .subscribe((product:Product) => {
              this.totalPrice += product.price! * item.quantity!;
            });
        });
      }
    });
  }

  navigateToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
