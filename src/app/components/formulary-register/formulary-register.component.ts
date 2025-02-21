import { Component, OnInit, output, OutputEmitterRef } from '@angular/core';
import { LabelInputComponent } from '../label-input/label-input.component';
import { ButtomComponent } from '../button/button.component';
import { DivContainerSvgComponent } from '../div-container-svg/div-container-svg.component';
import { buttonSubmitRegister, divContainerSvgRegister, labelEmailRegister, labelIdentificationRegister, labelNameRegister, labelPasswordRegister } from './data-formulary-register';
import { LabelInputInterface } from '../label-input/typeLabelInput';
import { ButtonInterface } from '../button/typeButton';
import { TypeDivContainerSvg } from '../div-container-svg/type-div-container-svg';

@Component({
  selector: 'app-formulary-register',
  standalone: true,
  imports: [
    LabelInputComponent,
    ButtomComponent,
    DivContainerSvgComponent
  ],
  templateUrl: './formulary-register.component.html',
  styleUrl: './formulary-register.component.css'
})
export class FormularyRegisterComponent implements OnInit {

  public labelPasswordInput: LabelInputInterface = labelPasswordRegister;
  public labelIdentificationInput: LabelInputInterface = labelIdentificationRegister;
  public labelEmailInput: LabelInputInterface = labelEmailRegister; 
  public labelNameInput: LabelInputInterface = labelNameRegister;
  public buttonInput: ButtonInterface = buttonSubmitRegister;
  public divContainerSvgInput: TypeDivContainerSvg = divContainerSvgRegister;
  public onSectionActivate: OutputEmitterRef<string> = output<string>();

  ngOnInit(): void {
    this.onSectionActivate.emit('register');
  }

  public onSubmit(event: any) {
    event.preventDefault();

    if (
      this.labelEmailInput.formControl.valid && 
      this.labelPasswordInput.formControl.valid && 
      this.labelIdentificationInput.formControl.valid &&
      this.labelNameInput.formControl.valid
    ) {
      alert("Formulario válido: " + JSON.stringify({
        email: this.labelEmailInput.formControl.value,
        password: this.labelPasswordInput.formControl.value,
        identification: this.labelIdentificationInput.formControl.value,
        name: this.labelNameInput.formControl.value
      }));
      this.labelEmailInput.formControl.reset();
      this.labelPasswordInput.formControl.reset();
      this.labelIdentificationInput.formControl.reset();
      this.labelNameInput.formControl.reset();
    } else {
      alert("Formulario inválido");
    }
  }

  public onBack() {
    this.onSectionActivate.emit('login');
  }
}
