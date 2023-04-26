import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { SettingsAccountComponent } from './components/settings-account/settings-account.component';
import { SettingsDefaultComponent } from './components/settings-default/settings-default.component';


@NgModule({
  declarations: [
    SettingsAccountComponent,
    SettingsDefaultComponent
  ],
  imports: [
    CommonModule,
    AppSettingsRoutingModule
  ]
})
export class AppSettingsModule { }
