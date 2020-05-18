import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent implements OnInit {
  color: string = 'accent';
  btnDisabled = false;

  colors = ['primary', 'accent', 'warn', ''];
  index = 0;

  constructor() {}

  // this => para acessar cada atributo da minha class
  // Executado quando o codigo é renderizado
  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.colors.length;
    }, 1000);
  }
}
