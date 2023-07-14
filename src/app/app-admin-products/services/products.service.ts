import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "../../app-shared-services/services/token.service";


const httpOptions = {
  headers: new HttpHeaders({})
};


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {

  }

  GetProducts() {
    let url = `${this.baseUrl}/Api/Products/`;
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

  UpdateProducts(product: FormData, productId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/Api/Products/${productId}`;
    return this.httpClient.put(url, product, httpOptions);
  }

  DeleteProducts(productId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/api/products/${productId}`;
    return this.httpClient.delete(url, httpOptions);
  }

  GetProductCount() {
    let url = `${this.baseUrl}/api/products/get/count/`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(url, httpOptions);
  }

  FeaturedProducts(count: number) {
    let url = `${this.baseUrl}/api/products/get/featured/${count}`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(url, httpOptions);
  }

}
