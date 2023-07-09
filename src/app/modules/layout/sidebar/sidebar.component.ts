import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'bi bi-speedometer2',
        routerLink: '/dashboard'
      },
      {
        label: 'Customers',
        icon: 'bi bi-people',
        routerLink: '/customer',

      },
      {
        label: 'app-administration',
        icon: 'bi bi-sliders2-vertical',
        routerLink: '/app-administration'
      },
      {
        label: 'Statistics',
        icon: 'bi bi-gear-wide',
        routerLink: '/statistics'
      },
      {
        label: 'Logout',
        icon: 'bi bi-box-arrow-left'
      }
    ];
  }
}


 // items: [
              //     {
              //         label: 'User',
              //         icon: 'pi pi-fw pi-trash'
              //     },
              //     {
              //       label: 'Option',
              //       icon: 'pi pi-fw pi-trash'
              //   }
              // ]