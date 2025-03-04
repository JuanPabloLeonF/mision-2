import { Component, inject, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TypeSectionInformation } from '../section-information/type-section-infromation';
import { Router } from '@angular/router';

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
  private _router: Router = inject(Router);

  protected onChangeInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.nameMoviesOuput = inputElement.value.trim().toLowerCase();
    this.filterByNameSearch();
  }

  private filterByNameSearch(): void {
    if (this.nameMoviesOuput.trim() !== "") {
      this.listMoviesShow =  this.listMoviesInput().filter(movie => movie.title.toLocaleLowerCase().includes(this.nameMoviesOuput));
    } else {
      this.listMoviesShow = [];
    }
  }

  protected getMovieByOnClick(id: string): void {
    this._router.navigate([`/movies/${id}`])
  }
}
