import { Injectable } from '@angular/core';
import { Cart, CartItem } from "../interfaces/cart.interface";

export const CART_KEY = "cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }

  initCartLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const intialCart = {
        items: []
      };
      const intialCartJson = JSON.stringify(intialCart);
      localStorage.setItem(CART_KEY, intialCartJson);
    }
  }

  getCart(): Cart {
    // @ts-ignore
    const cartJsonString: string = localStorage.getItem(CART_KEY);
    const cart: Cart = JSON.parse(cartJsonString);
    return cart;
  }

  setCartItem(cartItem: CartItem): Cart {
    const cart = this.getCart();
    // @ts-ignore
    const cartItemExist = cart.items.find((item) => item.prodctId === cartItem.prodctId);
    if (cartItemExist) {
      // @ts-ignore
      cart.items?.map((item) => {
        if (item.prodctId === cartItem.prodctId) {
          // @ts-ignore
          item.quantity = item.quantity + cartItem.quantity;
          return item;
        }
      });
    } else {
      cart.items?.push(cartItem);
    }
    const cartJson = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartJson);
    return cart;
  }


}
