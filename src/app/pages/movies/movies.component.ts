import { Component, inject, OnInit } from '@angular/core';
import { SectionInformationComponent } from '../../components/section-information/section-information.component';
import { MoviesService } from '../../services/movies.service';
import { inpurSectionInformationInit } from '../../components/section-information/data-section-information';
import { TypeSectionInformation } from '../../components/section-information/type-section-infromation';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [SectionInformationComponent],
})
export class MoviesComponent implements OnInit {

  private _moviesServices: MoviesService = inject(MoviesService);
  public moviesSelect: TypeSectionInformation = inpurSectionInformationInit;
  public sectionInformation: TypeSectionInformation[] = [] as TypeSectionInformation[];

  ngOnInit(): void {
    this._moviesServices.getAllMovies().subscribe((data) => {
      this.moviesSelect = data[0];
      this.sectionInformation = data;
    }).unsubscribe();
  }

}
