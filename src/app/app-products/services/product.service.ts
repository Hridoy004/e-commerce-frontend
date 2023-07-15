import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { TokenService } from "../../app-shared-services/services/token.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {

  }


  GetProductById(categoriesFilter?: string[]) {
    let params = new HttpParams();
    if (categoriesFilter) {
      params = params.append('categories', categoriesFilter.join(','));
    }
    let url = `${this.baseUrl}/api/products/`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      params: params // Include the params in the HTTP request
    };
    return this.httpClient.get(url, httpOptions);
  }



}



