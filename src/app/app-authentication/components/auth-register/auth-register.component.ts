import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../app-shared-services/services/backend.service";
import {TokenService} from "../../../app-shared-services/services/token.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";



@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  authenticationForm = new FormGroup(
    {
      FirstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      LastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }
  );

  constructor(private backendService: BackendService,
              private tokenService: TokenService,
              private matSnackbar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    const data: any = this.authenticationForm.getRawValue();
    console.log(data);
    this.backendService.Registration(data).subscribe((response: any) => {
      if(response.Success) {
       /* const token = response.Token;
        this.tokenService.setToken(token);*/
        this.matSnackbar.open('Registration successfully, Please cheack your mail', undefined, {
          duration: 3000
        });
      }
    }, (errorResponse: any) => {
      let errorMessage = errorResponse?.error?.Message;
      if(errorMessage) {
        this.matSnackbar.open(errorMessage, undefined, {
          duration: 3000
        })
      }
    })
  }
}
