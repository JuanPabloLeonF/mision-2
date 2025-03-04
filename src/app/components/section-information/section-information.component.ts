import { Component, input, InputSignal } from '@angular/core';
import { InputSearchComponent } from '../input-search/input-search.component';
import { DivContainerRankingComponent } from '../div-container-ranking/div-container-ranking.component';
import { inpurSectionInformationInit } from './data-section-information';
import { TypeSectionInformation } from './type-section-infromation';
import { DivContainerShowFileComponent } from '../div-container-show-file/div-container-show-file.component';

@Component({
  selector: 'app-section-information',
  imports: [
    InputSearchComponent,
    DivContainerRankingComponent,
    DivContainerShowFileComponent
  ],
  templateUrl: './section-information.component.html',
  styleUrl: './section-information.component.css'
})
export class SectionInformationComponent {
  public sectionInformationInput: InputSignal<TypeSectionInformation[]> = input<TypeSectionInformation[]>([] as TypeSectionInformation[]);
  public moviesInput: InputSignal<TypeSectionInformation> = input(inpurSectionInformationInit);
}
