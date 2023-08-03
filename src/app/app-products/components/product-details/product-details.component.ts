import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { Product } from 'src/app/app-admin-products/interfaces/products.interfaces';
import { Subject, takeUntil } from "rxjs";
import { ProductsService } from "../../../app-admin-products/services/products.service";
import { CartItem } from "../../../app-shared-services/interfaces/cart.interface";
import { CartService } from "../../../app-shared-services/services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  // @ts-ignore
  product: Product;
  endSubs$: Subject<any> = new Subject();
  quantity = 1;

  constructor(private productService: ProductsService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params["productid"]) {
        this._getProduct(params['productid']);
      }
    });
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.endSubs$.next();
    this.endSubs$.complete();
  }

  private _getProduct(id: string) {
    this.productService.GetProductsId(id)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((response) => {
        if (response) {
          this.product = response;
          console.log(response);
        }
      });
  }

  buyNow() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };

    this.cartService.setCartItem(cartItem);
    this.router.navigate(['/checkout']);
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.quantity
    };

    this.cartService.setCartItem(cartItem);
  }

}
