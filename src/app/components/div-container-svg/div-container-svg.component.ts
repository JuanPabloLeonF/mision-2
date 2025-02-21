import { Component, input, InputSignal } from '@angular/core';
import { TypeDivContainerSvg } from './type-div-container-svg';
import { divContainerSvgFormularyInit } from '../formulary-save-password/dataFormularyPassword';

@Component({
  selector: 'app-div-container-svg',
  imports: [],
  templateUrl: './div-container-svg.component.html',
  styleUrl: './div-container-svg.component.css'
})
export class DivContainerSvgComponent {
  public divContainerSvgInput: InputSignal<TypeDivContainerSvg> = input<TypeDivContainerSvg>(divContainerSvgFormularyInit);

}
