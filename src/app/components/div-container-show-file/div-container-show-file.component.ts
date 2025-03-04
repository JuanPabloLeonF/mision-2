import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { inpurSectionInformationInit } from '../section-information/data-section-information';
import { TypeSectionInformation } from '../section-information/type-section-infromation';

@Component({
  selector: 'app-div-container-show-file',
  imports: [],
  templateUrl: './div-container-show-file.component.html',
  styleUrl: './div-container-show-file.component.css'
})
export class DivContainerShowFileComponent {

  private _router: Router = inject(Router);
  public movieSelectInput: InputSignal<TypeSectionInformation> = input(inpurSectionInformationInit);

  protected watchMovie(): void {
    this._router.navigate([`watchMovie/${this.movieSelectInput().id}`])
  }
}
