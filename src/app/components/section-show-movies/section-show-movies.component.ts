import { Component, ElementRef, inject, input, InputSignal, OnInit, ViewChild } from '@angular/core';
import { TypeSectionInformation } from '../section-information/type-section-infromation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-show-movies',
  imports: [],
  templateUrl: './section-show-movies.component.html',
  styleUrl: './section-show-movies.component.css'
})
export class SectionShowMoviesComponent implements OnInit {

  private _router: Router = inject(Router);

  public listMoviesInput: InputSignal<TypeSectionInformation[]> = input([] as TypeSectionInformation[])
  public categorySelectedInput: InputSignal<string> = input("");
  protected listMovies: TypeSectionInformation[] = [] as TypeSectionInformation[];
  @ViewChild('containerMovies', { static: false }) containerMovies!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.listMovies = this.listMoviesInput().filter(movie => movie.category.includes(this.categorySelectedInput()));
  }

  public onTraslateLeft(): void {
    this.containerMovies.nativeElement.scrollBy({ left: -230, behavior: 'smooth' });
  }

  public onTraslateRight(): void {
    this.containerMovies.nativeElement.scrollBy({ left: 230, behavior: 'smooth' });
  }

  protected getMovieByOnClick(id: string): void {
    this._router.navigate([`/movies/${id}`])
  }

}
