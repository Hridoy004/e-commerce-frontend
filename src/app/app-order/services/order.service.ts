import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../../app-shared-services/services/token.service";
import { Order } from "../../app-admin-orders/interfaces/order.interface";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {

  }

  CreateOrder(order: Order) {
    console.log(order, "test order email");
    let url = `${this.baseUrl}/Api/Order`;
    return this.httpClient.post(url, order);
  }
}
