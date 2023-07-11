import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLandingRoutingModule } from './app-landing-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ToolbarModule } from "primeng/toolbar";
import { AppAdminModule } from "../app-admin-panel/app-admin.module";
import { FlexModule } from "@angular/flex-layout";
import { AppSharedModule } from "../app-shared/app-shared.module";
import { AppProductsModule } from "../app-products/app-products.module";
import { HomeDefalutComponent } from './components/home-defalut/home-defalut.component';


@NgModule({
  declarations: [
    NavBarComponent,
    HomePageComponent,
    HomeDefalutComponent
  ],
    imports: [
        CommonModule,
        AppLandingRoutingModule,
        MatSidenavModule,
        ButtonModule,
        CardModule,
        ToolbarModule,
        AppAdminModule,
        FlexModule,
        AppSharedModule,
        AppProductsModule
    ]
})
export class AppLandingModule { }
