import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenService } from "../../app-shared-services/services/token.service";
import { ContactInterface } from "../interfaces/contact.interface";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) {

  }

  GetContact() {
    let url = `${this.baseUrl}/api/contact`;
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(url, httpOptions);
  }

  CreateContact(contact: FormData) {
    let url = `${this.baseUrl}/api/contact`;
    console.log("conta dta", contact)
    return this.httpClient.post(url, contact);
  }

  DeleteContact(contactId: string) {
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    let url = `${this.baseUrl}/Api/Contact/${contactId}`;
    return this.httpClient.delete(url, httpOptions);
  }
}
