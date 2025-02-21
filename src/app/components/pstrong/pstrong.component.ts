import { Component, InputSignal, input, Output, EventEmitter } from '@angular/core';
import { pstrongInit } from '../formularyLogin/dataFormulary';
import { PstrongInterface } from './typePstrong';

@Component({
  selector: 'app-pstrong',
  imports: [],
  template: '<p>{{pStrongInput().valueP}} <strong (click)="pStrongInput().clickEvent.emit()">{{pStrongInput().valueStrong}}</strong></p>',
  styleUrl: './pstrong.component.css'
})
export class PstrongComponent {
  public pStrongInput: InputSignal<PstrongInterface> = input<PstrongInterface>(pstrongInit);
}
