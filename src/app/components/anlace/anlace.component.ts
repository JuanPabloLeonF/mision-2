import { Component, input, InputSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { anlaceInit, TypeAnlace } from './type-anlace';

@Component({
  selector: 'app-anlace',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: '<a routerLink="{{anlaceInput().valueRouterLink }}" routerLinkActive="active">{{anlaceInput().valueAnlace}}</a>',
  styleUrl: './anlace.component.css'
})
export class AnlaceComponent {
  public anlaceInput: InputSignal<TypeAnlace> = input<TypeAnlace>(anlaceInit);
}
