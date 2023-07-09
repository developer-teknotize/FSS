import { Component } from '@angular/core';

@Component({
  selector: 'app-app-administration',
  templateUrl: './app-administration.component.html',
  styleUrls: ['./app-administration.component.scss']
})
export class AppAdministrationComponent {
  products!: any[];
  ngOnInit() {
    this.products = [
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

  addapp: boolean = false;
  addApp() {
      this.addapp = true;
  }
}
