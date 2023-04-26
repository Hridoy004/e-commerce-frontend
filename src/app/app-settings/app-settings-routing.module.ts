import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsDefaultComponent} from "./components/settings-default/settings-default.component";
import {SettingsAccountComponent} from "./components/settings-account/settings-account.component";

const routes: Routes = [
  {
    path: '',
    component: SettingsDefaultComponent,
    children: [
      {
        path: '',
        component: SettingsAccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }
