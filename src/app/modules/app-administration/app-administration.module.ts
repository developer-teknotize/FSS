import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAdministrationRoutingModule } from './app-administration-routing.module';
import { AppAdministrationComponent } from './app-administration/app-administration.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimengModulesImportModule } from 'src/app/shared/primeng-modules-import/primeng-modules-import.module';


@NgModule({
  declarations: [
    AppAdministrationComponent
  ],
  imports: [
    CommonModule,
    AppAdministrationRoutingModule,
    HttpClientModule,
    PrimengModulesImportModule
  ]
})
export class AppAdministrationModule { }
