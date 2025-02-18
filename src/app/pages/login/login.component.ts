import { Component } from '@angular/core';
import { FormularyComponent } from '../../components/formulary/formulary.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormularyComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {}
