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
    return this.httpClient.get(url, httpOptions);
  }

  /*

  CreateCategories(category: Category) {
    let url = `${this.baseUrl}/Api/V1/Categories/`;
    return this.httpClient.post(url, category);
  }

  DeleteCategories(categoryId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/api/v1/categories/${categoryId}`;
    return this.httpClient.delete(url, httpOptions);
  }

  UpdateCategories(category: Category) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/api/v1/categories/`+category.id;
    return this.httpClient.put(url, category, httpOptions);
  }*/

}
