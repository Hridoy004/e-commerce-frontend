import { Injectable } from '@angular/core';
import { Authenticate } from "../interfaces/authenticate.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Registration} from "../interfaces/registration.interfaces";

const httpOptions = {
  headers: new HttpHeaders({})
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

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

  Category() {
    let url = `${this.baseUrl}/Api/V1/Categories/`;
    return this.httpClient.get(url, httpOptions);
  }

}
