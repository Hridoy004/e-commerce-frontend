import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { TokenService } from "../../../app-shared-services/services/token.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
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
    const data: any = this.forgetPasswordForm.getRawValue();
    this.backendService.ForgetPassword(data).subscribe((response: any) => {
      if (response.Success) {
        this.matSnackbar.open('Please go to your mail for reseting the password', undefined, {
          duration: 3000
        });
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

  login() {
    this.router.navigate(['/auth/login']).then();
  }
}
