import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { FlexModule } from "@angular/flex-layout";
import { GalleryComponent } from './components/gallery/gallery.component';


@NgModule({
    declarations: [

    BannerComponent,
         NavComponent,
         GalleryComponent
  ],
    exports: [
        NavComponent,
        BannerComponent,
        GalleryComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    FlexModule
  ]
})
export class AppSharedModule { }
