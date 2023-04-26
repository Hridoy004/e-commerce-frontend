import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdminRoutingModule } from './app-admin-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ShellComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppAdminRoutingModule
  ]
})
export class AppAdminModule { }
