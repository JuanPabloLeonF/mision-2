import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-div-container-ranking',
  imports: [],
  templateUrl: './div-container-ranking.component.html',
  styleUrl: './div-container-ranking.component.css'
})
export class DivContainerRankingComponent {
  public rankingInput: InputSignal<string> = input<string>("");
}
