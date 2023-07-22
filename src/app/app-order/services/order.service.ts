import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../../app-shared-services/services/token.service";
import { Order } from "../../app-admin-orders/interfaces/order.interface";
import { OrderItem } from "../../app-admin-orders/interfaces/order-item.interface";
import { Observable, switchMap } from "rxjs";
import { StripeService } from "ngx-stripe";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService,
              private stripeService: StripeService) {

  }

  CreateOrder(order: Order) {
    let url = `${this.baseUrl}/Api/Order`;
    return this.httpClient.post(url, order);
  }

  CreateCheckoutSession(orderItem: OrderItem[]) {
    let url = `${this.baseUrl}/create-checkout-session`;
    // @ts-ignore
    return this.httpClient.post(url, orderItem).pipe(switchMap((session: {id: string}) => {
      return this.stripeService.redirectToCheckout({sessionId: session.id});
    }));
  }

  CacheOrderData(order: Order) {
    localStorage.setItem('orderData',  JSON.stringify(order));
  }

  GetCachedOrderData(): Order {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('orderData'));
  }

  RemoveCachedOrderData() {
    localStorage.removeItem('orderData');
  }

}
