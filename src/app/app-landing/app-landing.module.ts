import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppLandingRoutingModule
  ]
})
export class AppLandingModule { }
