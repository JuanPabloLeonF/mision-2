import { Component } from '@angular/core';
import { AnlaceComponent } from '../../components/anlace/anlace.component';
import { TypeAnlace } from '../../components/anlace/type-anlace';
import { anlaceMovies, anlaceSeries, anlaceAdmin, anlacePerfil, divContainerSvg } from './data-header';
import { DivContainerSvgComponent } from '../../components/div-container-svg/div-container-svg.component';
import { TypeDivContainerSvg } from '../../components/div-container-svg/type-div-container-svg';

@Component({
  selector: 'app-header',
  imports: [
    AnlaceComponent,
    DivContainerSvgComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public anlaceMoviesInput: TypeAnlace = anlaceMovies;
  public anlaceSeriesInput: TypeAnlace = anlaceSeries;
  public anlaceAdminInput: TypeAnlace = anlaceAdmin;
  public anlacePerfilInput: TypeAnlace = anlacePerfil;
  public divContainerSvgInput: TypeDivContainerSvg = divContainerSvg;
}
