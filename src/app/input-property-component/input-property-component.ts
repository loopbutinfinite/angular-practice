import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-property-component',
  imports: [],
  templateUrl: './input-property-component.html',
  styleUrl: './input-property-component.css',
})
export class InputPropertyComponent {
  name = input<string>('Brandon');
}
