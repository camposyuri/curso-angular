import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css'],
})
export class NgContainerComponent implements OnInit {
  users = [
    { login: 'bob', role: 'admin', lastlogin: new Date('2/19/2020') },
    { login: 'lia', role: 'user', lastlogin: new Date('4/17/2020') },
    { login: 'jonh', role: 'admin', lastlogin: new Date('7/12/2020') },
    { login: 'trunks', role: 'user', lastlogin: new Date('8/10/2020') },
  ];

  constructor() {}

  ngOnInit(): void {}
}
