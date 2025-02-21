import { Component, OnInit, output, OutputEmitterRef } from '@angular/core';
import { LabelInputComponent } from '../label-input/label-input.component';
import { ButtomComponent } from '../button/button.component';
import { LabelInputInterface } from '../label-input/typeLabelInput';
import { buttonPassword, divContainerSvgFormularySavePassword, labelEmailPassword, labelIdentificationPassword, labelNewPasswordPassword } from './dataFormularyPassword';
import { ButtonInterface } from '../button/typeButton';
import { TypeDivContainerSvg } from '../div-container-svg/type-div-container-svg';
import { DivContainerSvgComponent } from '../div-container-svg/div-container-svg.component';

@Component({
  selector: 'app-formulary-save-password',
  imports: [
    LabelInputComponent,
    ButtomComponent,
    DivContainerSvgComponent
  ],
  templateUrl: './formulary-save-password.component.html',
  styleUrl: './formulary-save-password.component.css'
})
export class FormularySavePasswordComponent implements OnInit {
  
  public labelNewPasswordInput: LabelInputInterface = labelNewPasswordPassword;
  public labelIdentificationInput: LabelInputInterface = labelIdentificationPassword;
  public labelEmailInput: LabelInputInterface = labelEmailPassword; 
  public buttonInput: ButtonInterface = buttonPassword;
  public divContainerSvgInput: TypeDivContainerSvg = divContainerSvgFormularySavePassword;
  public onSectionActivate: OutputEmitterRef<string> = output<string>();


  ngOnInit(): void {
    this.onSectionActivate.emit('savePassword');
  }

  public onSubmit(event: any) {
    event.preventDefault();

    if (
      this.labelEmailInput.formControl.valid && 
      this.labelNewPasswordInput.formControl.valid && 
      this.labelIdentificationInput.formControl.valid
    ) {
      alert("Formulario válido: " + JSON.stringify({
        email: this.labelEmailInput.formControl.value,
        password: this.labelNewPasswordInput.formControl.value,
        identification: this.labelIdentificationInput.formControl.value
      }));
      this.labelEmailInput.formControl.reset();
      this.labelNewPasswordInput.formControl.reset();
      this.labelIdentificationInput.formControl.reset();
    } else {
      alert("Formulario inválido");
    }
  }

  public onBack() {
    this.onSectionActivate.emit('login');
  }
}
