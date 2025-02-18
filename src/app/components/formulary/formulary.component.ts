import { Component } from '@angular/core';
import { ButtomComponent } from '../button/button.component';
import { LabelInputComponent } from './label-input/label-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonInterface, buttonLogin } from '../button/typeButton';
import { PstrongComponent } from '../pstrong/pstrong.component';
import { PstrongInterface, pStrongLoginRegister, pStrongLoginSavePassword } from '../pstrong/dataPstrong';
import { labelInitEmailClass, labelInitPasswordClass } from './dataFormulary';
import { LabelInputInterface } from './label-input/typeLabelInput';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrl: './formulary.component.css',
  imports: [
    LabelInputComponent, 
    ButtomComponent, 
    ReactiveFormsModule,
    PstrongComponent
  ]
})
export class FormularyComponent {

  public buttonInput: ButtonInterface = buttonLogin;
  public labelInputEmail: LabelInputInterface = labelInitEmailClass;
  public labelInputPassword: LabelInputInterface = labelInitPasswordClass;
  public pStrongLoginSavePassword: PstrongInterface = pStrongLoginSavePassword;
  public pStrongLoginRegister: PstrongInterface = pStrongLoginRegister;

  public onSubmit(event: any) {
      event.preventDefault();

      if (this.labelInputEmail.formControl.valid && this.labelInputPassword.formControl.valid) {
        alert("Formulario válido: " + JSON.stringify({
          email: this.labelInputEmail.formControl.value,
          password: this.labelInputPassword.formControl.value
        }));
        this.labelInputEmail.formControl.reset();
        this.labelInputPassword.formControl.reset();
      } else {
        alert("Formulario inválido");
      }
  }
}
