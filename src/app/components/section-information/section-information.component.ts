import { Component, input, InputSignal, OnInit } from '@angular/core';
import { InputSearchComponent } from '../input-search/input-search.component';
import { DivContainerRankingComponent } from '../div-container-ranking/div-container-ranking.component';
import { inpurSectionInformationInit } from './data-section-information';
import { TypeSectionInformation } from './type-section-infromation';

@Component({
  selector: 'app-section-information',
  imports: [
    InputSearchComponent,
    DivContainerRankingComponent,
  ],
  templateUrl: './section-information.component.html',
  styleUrl: './section-information.component.css'
})
export class SectionInformationComponent implements OnInit {
  public sectionInformationInput: InputSignal<TypeSectionInformation> = input<TypeSectionInformation>(inpurSectionInformationInit);

  ngOnInit(): void {
    this.sectionInformationInput().title = "titulo pelicula"
    this.sectionInformationInput().description = "descripcion pelicula"
    this.sectionInformationInput().ranking = "7.8"
  }
}
