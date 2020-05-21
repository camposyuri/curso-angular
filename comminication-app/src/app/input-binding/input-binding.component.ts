import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css'],
})
export class InputBindingComponent implements OnInit {
  @Input('firstName')
  name: string;
  @Input()
  lastName: string;
  @Input()
  age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Lia', age: 21 },
      { id: 3, name: 'Bob', age: 50 },
      { id: 4, name: 'Tony', age: 19 },
    ];
  }

  ngOnInit(): void {}
}
