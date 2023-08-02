import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from "../../../app-shared-services/services/cart.service";
import { Router } from "@angular/router";
import { OrderService } from "../../../app-admin-orders/services/order.service";
import { CartItemDetailed } from "../../../app-shared-services/interfaces/cart.interface";
import { Subject } from "rxjs";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cartItemsDetailed: CartItemDetailed[] = [];
  cartCount = 0;
  endSubs$: Subject<any> = new Subject();

  constructor(private cartService: CartService,
              private ordersService: OrderService,
              private router: Router,) {
  }

  ngOnInit(): void {
    this._getCartDetails();
  }

  ngOnDestroy() {
    // @ts-ignore
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getCartDetails() {
    this.cartService.cart$.pipe().subscribe((respCart) => {
      this.cartItemsDetailed = [];
      this.cartCount = respCart?.items?.length ?? 0;
      respCart.items?.forEach(cartItem => {
        // @ts-ignore
        this.ordersService.GetProductsId(cartItem.productId).subscribe((response) => {
          this.cartItemsDetailed.push({
            product: response,
            quantity: cartItem.quantity
          })
        })
      })

    });
  }


  backToShop() {
    this.router.navigate(['/products']);
  }

  deleteCartItem(cartItem: CartItemDetailed) {
    this.cartService.deleteCartItem(cartItem.product.id);
  }

  updateCartItemQuantity(event: any, cartItem: CartItemDetailed) {
    const maxQuantity = 10;

    if (cartItem && event.value <= maxQuantity) {
      this.cartService.setCartItem(
        {
          productId: cartItem.product.id,
          quantity: event.value
        },
        true
      );
    } else {
      cartItem.quantity = maxQuantity;
      this.cartService.setCartItem(
        {
          productId: cartItem.product.id,
          quantity: maxQuantity
        },
        true
      );
    }
  }
}
