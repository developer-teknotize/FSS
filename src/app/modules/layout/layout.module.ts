import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimengModulesImportModule } from 'src/app/shared/primeng-modules-import/primeng-modules-import.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    PrimengModulesImportModule
  ]
})
export class LayoutModule { }
