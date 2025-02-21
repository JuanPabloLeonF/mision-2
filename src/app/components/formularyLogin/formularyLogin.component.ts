import { Component, OnInit, output, OutputEmitterRef } from '@angular/core';
import { ButtomComponent } from '../button/button.component';
import { LabelInputComponent } from '../label-input/label-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonInterface } from '../button/typeButton';
import { PstrongComponent } from '../pstrong/pstrong.component';
import { buttonLogin, labelInitEmailClass, labelInitPasswordClass, pStrongLoginRegister, pStrongLoginSavePassword } from './dataFormulary';
import { LabelInputInterface } from '../label-input/typeLabelInput';
import { PstrongInterface } from '../pstrong/typePstrong';

@Component({
  selector: 'app-formulary-login',
  templateUrl: './formularyLogin.component.html',
  styleUrl: './formularyLogin.component.css',
  imports: [
    LabelInputComponent, 
    ButtomComponent, 
    ReactiveFormsModule,
    PstrongComponent
  ]
})
export class FormularyLoginComponent implements OnInit {

  public labelInputEmail: LabelInputInterface = labelInitEmailClass;
  public buttonInput: ButtonInterface = buttonLogin;
  public labelInputPassword: LabelInputInterface = labelInitPasswordClass;
  public pStrongLoginSavePassword: PstrongInterface = pStrongLoginSavePassword;
  public pStrongLoginRegister: PstrongInterface = pStrongLoginRegister;
  public onSectionActivate: OutputEmitterRef<string> = output<string>();


  ngOnInit(): void {

    this.pStrongLoginRegister.clickEvent.subscribe(() => {
      this.onSectionActivate.emit("register");
    });

    this.pStrongLoginSavePassword.clickEvent.subscribe(() => {
      this.onSectionActivate.emit("savePassword");
    });

    this.onSectionActivate.emit('login');
  }

  public onSubmit(event: any) {
    event.preventDefault();

    if (this.labelInputEmail.formControl.valid &&   this.labelInputPassword.formControl.valid) {
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
