import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Product } from "../../../app-admin-products/interfaces/products.interfaces";
import { ContactService } from "../../services/contact.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ContactInterface } from "../../interfaces/contact.interface";
import { Router } from "@angular/router";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { User } from "../../../app-shared-services/interfaces/user.interface";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    message: new FormControl('', [
      Validators.required
    ]),
  })

  constructor(private contactService: ContactService,
              private matSnackbar: MatSnackBar,
              private backendService: BackendService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.backendService.Profile().subscribe((response:any) => {
      let v = this.contactForm.get('email')?.setValue(response.User?.Email);
    })
  }

  hasError(controlName: string, type: string) {
    const formControl = this.contactForm.get(controlName);
    return formControl && formControl.hasError(type) && formControl.touched;
  }

  enabledErrorIf(controlName: string, types: string[]) {
    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      const formControl = this.contactForm.get(controlName);
      if (formControl && formControl.hasError(type) && formControl.touched)
        return true;
    }
    return false;
  }


  onFormSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    const data: any = this.contactForm.getRawValue();
    this.contactService.CreateContact(data).subscribe((response: any) => {
      if (response.Success) {
        this.matSnackbar.open('Message sent successfully', undefined, {
          duration: 3000
        });
        this.contactForm.reset()
      }
    }, (errorResponse: any) => {
      let errorMessage = errorResponse?.error?.Message;
      if (errorMessage) {
        this.matSnackbar.open(errorMessage, undefined, {
          duration: 3000
        })
      }
    })
  }
}
