import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anlace',
  imports: [RouterLink],
  template: '<a routerLink="{{valueRouterLink()}}" routerLinkActive="active">{{valueAnlace()}}</a>',
  styleUrl: './anlace.component.css'
})
export class AnlaceComponent {
  public valueAnlace: InputSignal<string> = input<string>("value anlace");
  public valueRouterLink: InputSignal<string> = input<string>("/");
}
