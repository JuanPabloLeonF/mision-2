import { Component, input, InputSignal } from '@angular/core';
import { ButtomComponent } from '../button/button.component';
import { LabelInputComponent } from './label-input/label-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonInterface } from '../button/typeButton';
import { PstrongComponent } from '../pstrong/pstrong.component';
import { buttonLogin, formularyInit, labelInitEmailClass, labelInitPasswordClass, pStrongLoginRegister, pStrongLoginSavePassword } from './dataFormulary';
import { LabelInputInterface } from './label-input/typeLabelInput';
import { PstrongInterface } from '../pstrong/typePstrong';
import { FormularyInterface } from './typeFormulary';

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

  public formularyInput: InputSignal<FormularyInterface> = input<FormularyInterface>(formularyInit)

  public buttonInput: ButtonInterface = this.formularyInput().inputs.find(input => input === buttonLogin) as ButtonInterface;
  public labelInputEmail: LabelInputInterface = this.formularyInput().inputs.find(input => input === labelInitEmailClass) as LabelInputInterface;
  public labelInputPassword: LabelInputInterface = this.formularyInput().inputs.find(input => input === labelInitPasswordClass) as LabelInputInterface;
  public pStrongLoginSavePassword: PstrongInterface = this.formularyInput().inputs.find(input => input === pStrongLoginSavePassword) as PstrongInterface;
  public pStrongLoginRegister: PstrongInterface = this.formularyInput().inputs.find(input => input === pStrongLoginRegister) as PstrongInterface;

  public onSubmit(event: any) {
    this.formularyInput().onSubmit(event, this.labelInputEmail, this.labelInputPassword);
  }

  private getInputsOfFormularyInputs(): void {
    this.buttonInput = this.formularyInput().inputs.find(input => input === buttonLogin) as ButtonInterface;
  }
}
