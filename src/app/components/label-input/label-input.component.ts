import { Component, input, InputSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { labelInputInit } from '../formularyLogin/dataFormulary';
import { LabelInputInterface } from './typeLabelInput';

@Component({
  standalone: true,
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrl: './label-input.component.css',
  imports: [ReactiveFormsModule, NgClass]
})
export class LabelInputComponent {
  public labelInput: InputSignal<LabelInputInterface>  = input<LabelInputInterface>(labelInputInit);
  public onChangeValue: string = "";
  
  public onChangeInput(event: any): void {
    this.onChangeValue = event.target.value;
    this.validateData();
  }

  private validateData(): void {

    if (this.labelInput().typeInput == "email") {
      if (this.labelInput().formControl.errors?.["required"]) {
        this.labelInput().valueSpan = "El campo es obligatorio"
      } else if (this.labelInput().formControl.errors?.["email"]) {
        this.labelInput().valueSpan = "El correo electronico no es valido"
      } else {
        this.labelInput().valueSpan = "EMAIL";
      }
    } else if (this.labelInput().typeInput == "password") {
      if (this.labelInput().formControl.errors?.["required"]) {
        this.labelInput().valueSpan = "El campo es obligatorio"
      } else if (this.labelInput().formControl.errors?.["pattern"]) {
        this.labelInput().valueSpan = "La contrasena debe tener entre 5 y 15 caracteres, al menos una letra mayuscula, una letra minuscula y un número."
      } else {
        this.labelInput().valueSpan = "PASSWORD";
      }
    } else if (this.labelInput().typeInput == "text" && this.labelInput().nameInput == "identification") {
      if (this.labelInput().formControl.errors?.["required"]) {
        this.labelInput().valueSpan = "El campo es obligatorio"
      } else if (this.labelInput().formControl.errors?.["pattern"]) {
        this.labelInput().valueSpan = "La identificacion debe tener entre 5 y 10 caracteres, solo numeros."
      } else {
        this.labelInput().valueSpan = "IDENTIFICACION";
      }
    } else if (this.labelInput().typeInput == "text" && this.labelInput().nameInput == "name") {
      if (this.labelInput().formControl.errors?.["required"]) {
        this.labelInput().valueSpan = "El campo es obligatorio"
      } else if (this.labelInput().formControl.errors?.["pattern"]) {
        this.labelInput().valueSpan = "El nombre debe tener entre 5 y 30 caracteres, solo letras."
      } else {
        this.labelInput().valueSpan = "NOMBRE";
      }
    }
  }
}
