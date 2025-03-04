import { Component, inject, OnInit } from '@angular/core';
import { SectionInformationComponent } from '../../components/section-information/section-information.component';
import { MoviesService } from '../../services/movies.service';
import { inpurSectionInformationInit } from '../../components/section-information/data-section-information';
import { TypeSectionInformation } from '../../components/section-information/type-section-infromation';
import { SectionShowMoviesComponent } from '../../components/section-show-movies/section-show-movies.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [
    SectionInformationComponent,
    SectionShowMoviesComponent
  ],
})
export class MoviesComponent implements OnInit {

  private _moviesServices: MoviesService = inject(MoviesService);
  private _route: ActivatedRoute = inject(ActivatedRoute);

  public moviesSelect: TypeSectionInformation = inpurSectionInformationInit;
  public sectionInformation: TypeSectionInformation[] = [] as TypeSectionInformation[];
  protected listCategories: string[] = ["ACTION", "DRAMA", "COMEDY"];

  ngOnInit(): void {
    this._moviesServices.getAllMovies().subscribe((data) => {
      this.moviesSelect = data[0];
      this.sectionInformation = data;
    }).unsubscribe();

    this._route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      let movieFound: TypeSectionInformation | null = null;
      if (movieId) {
        movieFound = this.sectionInformation.find(movie => movie.id === movieId) || null;
        if (movieFound !== null) {
          this.moviesSelect = movieFound;
        }
      } else {
        this.moviesSelect = this.sectionInformation[0];
      }
    });
  }

}
