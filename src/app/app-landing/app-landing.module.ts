import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";


@NgModule({
  declarations: [
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppLandingRoutingModule,
    MatSidenavModule,
    ButtonModule,
    CardModule,
    ToolbarModule
  ]
})
export class AppLandingModule { }
