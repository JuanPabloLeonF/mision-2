import { Component, input, InputSignal} from '@angular/core';
import { ButtonInterface, buttonInit } from './typeButton';

@Component({
  selector: 'app-buttom',
  imports: [],
  template: '<button type="{{this.buttonInput().typeButton}}" (click)="this.buttonInput().clickEvent.emit();">{{buttonInput().valueButton}}</button>',
  styleUrl: './button.component.css'
})
export class ButtomComponent {
  public buttonInput: InputSignal<ButtonInterface> = input<ButtonInterface>(buttonInit);
}