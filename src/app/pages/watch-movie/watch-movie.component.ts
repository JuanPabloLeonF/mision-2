import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { inpurSectionInformationInit } from '../../components/section-information/data-section-information';
import { TypeSectionInformation } from '../../components/section-information/type-section-infromation';

@Component({
  selector: 'app-watch-movie',
  imports: [],
  templateUrl: './watch-movie.component.html',
  styleUrl: './watch-movie.component.css'
})
export class WatchMovieComponent implements OnInit {

  private _movieService: MoviesService = inject(MoviesService);
  private _router: ActivatedRoute = inject(ActivatedRoute);
  protected movieSelect: TypeSectionInformation = inpurSectionInformationInit;

  ngOnInit(): void {
    this._router.paramMap.subscribe(param => {
      const idMovie = param.get('id');
      if (idMovie) {
        this._movieService.getById(idMovie).subscribe(movie => {
          this.movieSelect = movie;
        })
      } else {
        this._movieService.getFirstMovie().subscribe(movie => {
          this.movieSelect = movie;
        })
      }
    })
  }
    
}
