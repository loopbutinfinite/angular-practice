import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-component',
  imports: [],
  styleUrl: './property-binding-component.css',
  // This is binding the attribute "src" of the img div to the class property of "imageURL"
  template: `
    <img [src]="imageURL" alt="photo">
  `,
})
export class PropertyBindingComponent {
  imageURL = "urlToImageHere";
}
