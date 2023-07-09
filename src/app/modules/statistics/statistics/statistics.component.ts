import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  products!: any[];
  rangeDates: Date[] | undefined;
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
}
