import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './productservice';

interface People {
  firstname?: string;
  lastname?: string;
  age?: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  products!: Product[];
  checked: boolean = false;

  tableData: People[] = [];
    cols: any[] = [];
  constructor(private productService: ProductService) {}

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

}
