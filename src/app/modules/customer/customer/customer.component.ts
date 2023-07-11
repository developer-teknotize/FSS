import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class CustomerComponent {
  products!: Product[];
  checked: boolean = false;

  tableData: People[] = [];
    cols: any[] = [];
  constructor(private productService: ProductService, private confirmationService: ConfirmationService, private messageService: MessageService) {}



  ngOnInit() {
      this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));

    
    this.tableData = [
        {
            firstname: 'David',
            lastname: 'ace',
            age: '40',
        },
        {
            firstname: 'AJne',
            lastname: 'west',
            age: '40',
        },
        {
            firstname: 'Mak',
            lastname: 'Lame',
            age: '40',
        },
        {
            firstname: 'Peter',
            lastname: 'raw',
            age: '40',
        },
        {
            firstname: 'Kane',
            lastname: 'James',
            age: '40',
        }
    ];
  }

  addcustomer: boolean = false;

    addCustomer() {
        this.addcustomer = true;
    }

    adduser: boolean = false;

    addUser() {
        this.adduser = true;
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
  showToaster() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}
}
