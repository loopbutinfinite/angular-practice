import { Component } from '@angular/core';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-display-cards-component',
  imports: [CardComponent],
  templateUrl: './display-cards-component.html',
  styleUrl: './display-cards-component.css',
})
export class DisplayCardsComponent {}
