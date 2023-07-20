import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";
import { CartService } from "../../../app-shared-services/services/cart.service";
import { CartItem } from "../../../app-shared-services/interfaces/cart.interface";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  // @ts-ignore
  @Input() product: Product;

  constructor(private cartService: CartService,
              private messageService: MessageService) {

  }

  ngOnInit(): void {
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    }
    this.cartService.setCartItem(cartItem);
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `Cart Updated!`
    });
  }

}
