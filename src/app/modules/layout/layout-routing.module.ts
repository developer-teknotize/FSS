import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('../events/events.module').then(m => m.EventsModule)
      // },
      {
        path: 'dashboard',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('src/app/modules/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'app-administration',
        loadChildren: () => import('src/app/modules/app-administration/app-administration.module').then(m => m.AppAdministrationModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('src/app/modules/statistics/statistics.module').then(m => m.StatisticsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
