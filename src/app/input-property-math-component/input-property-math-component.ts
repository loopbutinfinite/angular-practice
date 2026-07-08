import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-property-math-component',
  imports: [],
  templateUrl: './input-property-math-component.html',
  styleUrl: './input-property-math-component.css',
})
export class InputPropertyMathComponent {
  sum = input<number>(4+4);
}
