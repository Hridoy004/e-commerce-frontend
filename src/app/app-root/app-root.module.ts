import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRootRoutingModule } from './app-root-routing.module';
import { BrowserModule } from "@angular/platform-browser";
import { RootDefaultComponent } from "./components/root-default/root-default.component";
import { StartupService } from "../app-shared-services/services/startup.service";
import { TokenService } from "../app-shared-services/services/token.service";
import { UserService } from "../app-shared-services/services/user.service";
import { BackendService } from "../app-shared-services/services/backend.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppSharedModule } from "../app-shared/app-shared.module";
import { ConfirmationService, MessageService } from "primeng/api";
import { CartService } from "../app-shared-services/services/cart.service";
import { NgxStripeModule } from "ngx-stripe";
import { Error404Component } from './components/error404/error404.component';

export function startupServiceFactory(startupService: StartupService,
                                      tokenService: TokenService): Function {

  const redirectLocations = [
    '/auth/login',
    '/auth/register',
    '/auth/verify',
    '/auth/forget-password',
    '/auth/reset-password'
  ]

  return () => {
    const token = tokenService.getToken();
    console.log(token);
    const location = window.location.pathname;
    if (!token) {
      if (redirectLocations.indexOf(location) < 0) {
        window.location.href = '/auth/login';
      }
    }
  }
}

@NgModule({
  declarations: [
    RootDefaultComponent,
    Error404Component,
  ],
  bootstrap: [
    RootDefaultComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService, TokenService],
      multi: true
    },
    StartupService,
    TokenService,
    UserService,
    BackendService,
    MessageService,
    ConfirmationService,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRootRoutingModule,
    BrowserAnimationsModule,
    AppSharedModule,
    NgxStripeModule.forRoot('pk_test_51NWMUuE4Ic1YAnIMSZqupHophTPw1jsfIjai2Q41vu3TK8OCNhgmiWTpwrdmUFJSmnlTETn6zjnSx5kTEKIh1Hhl00YDZu3Yv0'),
  ]
})
export class AppRootModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage();
  }
}
