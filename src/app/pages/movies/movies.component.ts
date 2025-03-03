import { Component } from '@angular/core';
import { SectionInformationComponent } from '../../components/section-information/section-information.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [SectionInformationComponent],
})
export class MoviesComponent {
}
