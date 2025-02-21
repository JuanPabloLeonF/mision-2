import { Component, OnInit } from '@angular/core';
import { FormularyLoginComponent } from '../../components/formularyLogin/formularyLogin.component';
import { LoginInit, TypeLogin } from './typeLogin';
import { FormularySavePasswordComponent } from '../../components/formulary-save-password/formulary-save-password.component';
import { FormularyRegisterComponent } from '../../components/formulary-register/formulary-register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormularyLoginComponent,
    FormularySavePasswordComponent,
    FormularyRegisterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public inputLogin: TypeLogin = LoginInit;

  ngOnInit(): void {
    this.inputLogin = LoginInit;
  }

  public getSectionActivate(value: string): void {

    if (value === "login") {
      this.inputLogin = {
        isActivateLogin: true,
        isActivateRegister: false,
        isActivateSavePassword: false,
      }
    } else if (value === "register") {
      this.inputLogin = {
        isActivateLogin: false,
        isActivateRegister: true,
        isActivateSavePassword: false,
      }
    } else if (value === "savePassword") {
      this.inputLogin = {
        isActivateLogin: false,
        isActivateRegister: false,
        isActivateSavePassword: true,
      }
    } else  {
      this.inputLogin = {
        isActivateLogin: true,
        isActivateRegister: false,
        isActivateSavePassword: false,
      }
    }
  }
}
