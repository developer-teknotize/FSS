import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ConfirmationService, MessageService]
})

export class SidebarComponent {
  items: MenuItem[];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

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
        icon: 'bi bi-box-arrow-left',
        command: (event) => { this.confirm1(); }
      }
    ];
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
        },
        reject: (type: ConfirmEventType) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
        }
    });
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