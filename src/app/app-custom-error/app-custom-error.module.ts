import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { AvenueMatErrorComponent } from './components/avenue-mat-error/avenue-mat-error.component';


@NgModule({
  declarations: [
    AvenueMatErrorComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports: [AvenueMatErrorComponent]
})
export class AppCustomErrorModule {
}
