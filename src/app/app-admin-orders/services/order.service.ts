import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "../../app-shared-services/services/token.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {

  }

  GetOrders() {
    let url = `${this.baseUrl}/Api/Order/`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(url, httpOptions);
  }

  CreateProducts(product: FormData) {
    let url = `${this.baseUrl}/Api/Products/`;
    return this.httpClient.post(url, product);
  }

  GetOrderId(productId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    let url = `${this.baseUrl}/api/order/${productId}`;
    return this.httpClient.get(url, httpOptions);
  }

  OrderId(productId: any) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    let url = `${this.baseUrl}/api/order/${productId}`;
    return this.httpClient.get(url, httpOptions);
  }

  UpdateOrder(orderStatus: { status: string }, orderId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/Api/Order/${orderId}`;
    return this.httpClient.put(url, orderStatus, httpOptions);
  }

  DeleteOrder(orderId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/api/order/${orderId}`;
    return this.httpClient.delete(url, httpOptions);
  }

  GetOrdersCount() {
    let url = `${this.baseUrl}/api/order/get/count/`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(url, httpOptions);
  }

  GetTotalSales() {
    let url = `${this.baseUrl}/api/order/total/sales/`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(url, httpOptions);
  }

  GetProductsId(productId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    let url = `${this.baseUrl}/Api/Products/${productId}`;
    return this.httpClient.get(url, httpOptions);
  }

}
