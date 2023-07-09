import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdministrationComponent } from './app-administration/app-administration.component';

const routes: Routes = [
  {
    path:'',component:AppAdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdministrationRoutingModule { }
