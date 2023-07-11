import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefalutComponent } from "./components/home-defalut/home-defalut.component";
import { HomePageComponent } from "./components/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomeDefalutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLandingRoutingModule {
}
