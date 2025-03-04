import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TypeSectionInformation } from '../section-information/type-section-infromation';

@Component({
  selector: 'app-input-search',
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent {
  public listMoviesInput: InputSignal<TypeSectionInformation[]> = input([] as TypeSectionInformation[]);
  public nameMoviesOuput: string = "";
  protected listMoviesShow: TypeSectionInformation[] = [];

  protected onChangeInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nameMoviesOuput = inputElement.value.trim().toLowerCase();
    this.filterByNameSearch();
  }

  private filterByNameSearch(): void {
    if (this.nameMoviesOuput.trim() !== "") {
      this.listMoviesShow =  this.listMoviesInput().filter(movie => movie.title.includes(this.nameMoviesOuput));
    } else {
      this.listMoviesShow = [];
    }
  }
}
