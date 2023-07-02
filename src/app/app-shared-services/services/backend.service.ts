import { Injectable } from '@angular/core';
import { Authenticate } from "../interfaces/authenticate.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Registration } from "../interfaces/registration.interfaces";
import { Category } from "../../app-categories/interfaces/category.interface";
import { TokenService } from "./token.service";

const httpOptions = {
  headers: new HttpHeaders({})
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {

  }

  Authenticate(authenticate: Authenticate) {
    let url = `${this.baseUrl}/Authentication/Login`;
    return this.httpClient.post(url, authenticate);
  }

  AccountVerify(verificationToken: string) {
    let payload = {token: verificationToken};
    let url = `${this.baseUrl}/Verify`;
    return this.httpClient.post(url, payload);
  }

  Registration(authenticate: Registration) {
    let url = `${this.baseUrl}/Authentication/Register`;
    return this.httpClient.post(url, authenticate);
  }

  GetUser() {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    let url = `${this.baseUrl}/Authentication/User`;
    return this.httpClient.get(url, httpOptions);
  }

  DeleteUser(userId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    const url = `${this.baseUrl}/Authentication/User/${userId}`;
    return this.httpClient.delete(url, httpOptions);
  }

  GetCategories() {
    let url = `${this.baseUrl}/Api/V1/Categories/`;
    return this.httpClient.get(url, httpOptions);
  }

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
    const url = `${this.baseUrl}/api/v1/categories/` + category.id;
    return this.httpClient.put(url, category, httpOptions);
  }

  GetCategoriesId(categoryId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    let url = `${this.baseUrl}/Api/V1/Categories/${categoryId}`;
    return this.httpClient.get(url, httpOptions);
  }


}
