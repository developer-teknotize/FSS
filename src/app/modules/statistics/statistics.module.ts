import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { PrimengModulesImportModule } from 'src/app/shared/primeng-modules-import/primeng-modules-import.module';


@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    PrimengModulesImportModule
  ]
})
export class StatisticsModule { }
