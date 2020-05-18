import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent implements OnInit {
  person = {
    firstname: 'Yuri',
    lastName: 'Campos',
    age: 20,
    address: 'Router AV',
  };

  constructor() {}

  ngOnInit(): void {}
}
