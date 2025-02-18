import { Component, input, InputSignal} from '@angular/core';
import { buttonInit } from '../formulary/dataFormulary';
import { ButtonInterface } from './typeButton';

@Component({
  selector: 'app-buttom',
  imports: [],
  template: '<button type="{{this.buttonInput().typeButton}}" (click)="this.buttonInput().clickEvent.emit();">{{buttonInput().valueButton}}</button>',
  styleUrl: './button.component.css'
})
export class ButtomComponent {
  public buttonInput: InputSignal<ButtonInterface> = input<ButtonInterface>(buttonInit);
}