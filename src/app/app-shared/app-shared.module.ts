import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
    declarations: [
    
    BannerComponent
  ],
  exports: [
  ],
    imports: [
        CommonModule
    ]
})
export class AppSharedModule { }
