import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLoginComponent} from "./components/auth-login/auth-login.component";
import {AuthRegisterComponent} from "./components/auth-register/auth-register.component";
import {AccountVerificationComponent} from "./components/account-verification/account-verification.component";
import { ForgetPasswordComponent } from "./components/forget-password/forget-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent
  },
  {
    path: 'register',
    component: AuthRegisterComponent
  },
  {
    path: 'verify',
    component: AccountVerificationComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
