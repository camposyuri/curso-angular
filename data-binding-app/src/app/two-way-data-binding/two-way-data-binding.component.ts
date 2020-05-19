import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css'],
})
export class TwoWayDataBindingComponent implements OnInit {
  name1: string = '';
  name2: string = '';

  client = {
    firstName: 'Yuri',
    lastName: 'Campos',
    address: 'Router 100',
    age: 20,
  };

  constructor() {}

  ngOnInit(): void {}
}
