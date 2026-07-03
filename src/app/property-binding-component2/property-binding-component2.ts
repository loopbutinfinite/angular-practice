import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-component2',
  imports: [],
  styleUrl: './property-binding-component2.css',
  //This is binding the "contentEditable" attribute of the div to the class property of "isEditable" that has the value of true tied to it.
  //With the attribute bound to the class property, that has the value of true, this means that the div is now editable.
  template: `
    <div [contentEditable]="isEditable"> </div>
  `,
})
export class PropertyBindingComponent2 {
  isEditable = true;
}
