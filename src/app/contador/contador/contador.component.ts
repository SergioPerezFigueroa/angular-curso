import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h1>
      la base es : <strong>{{ base }}</strong>
    </h1>

    <button (click)="acumular(base)">+{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">-{{ base }}</button>
  `
})
export class ContadorComponent {

    public title: string = 'contador APP';
    numero: number =10;
    base: number=10;
  
  acumular(valor: number ){
  this.numero += valor;
  }
  
}
