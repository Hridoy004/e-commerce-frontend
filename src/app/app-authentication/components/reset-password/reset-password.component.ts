import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendService } from "../../../app-shared-services/services/backend.service";
import { TokenService } from "../../../app-shared-services/services/token.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm = new FormGroup({
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }
  );

  constructor(private backendService: BackendService,
              private tokenService: TokenService,
              private matSnackbar: MatSnackBar,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.token) {
      }
    })
  }

  onSubmitForm() {
    const data: any = this.resetPasswordForm.getRawValue();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.token) {
        data.Token = params.token;
        this.backendService.ResetPassword(data).subscribe((response: any) => {
          if (response.Success) {
            this.matSnackbar.open('Password save successfully', undefined, {
              duration: 3000
            });
            this.router.navigate(['/auth/login'])
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
    })
  }
}


