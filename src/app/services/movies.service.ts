import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TypeSectionInformation } from '../components/section-information/type-section-infromation';
import { listMovies } from './data-movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _httpClient: HttpClient = inject(HttpClient);

  public getAllMovies(): Observable<TypeSectionInformation[]> {
    //return this._httpClient.get<TypeSectionInformation[]>('http://localhost:3000/movies');
    return of(listMovies);
  }

  public getById(id: string): Observable<TypeSectionInformation> {
    //return this._httpClient.get<TypeSectionInformation[]>('http://localhost:3000/movies');
    return of(listMovies.find(movie => movie.id === id)!);
  }

  public getFirstMovie(): Observable<TypeSectionInformation> {
    //return this._httpClient.get<TypeSectionInformation[]>('http://localhost:3000/movies');
    return of(listMovies[0]);
  }
}
