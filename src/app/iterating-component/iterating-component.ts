import { Component } from '@angular/core';

//This component is to play with the @for Angular template syntax. To iterate through a list of users and display their names and ages.
@Component({
  selector: 'app-iterating-component',
  imports: [],
  styleUrl: './iterating-component.css',
  template: `
  @for(user of users; track user.id){
    <p>Name:{{user.name}}, Age: {{user.age}}</p>
  }
  `,
})
export class IteratingComponent {
  users = [
    {id: 0, name: 'Sarah', age:32},
    {id: 1, name: 'Amy', age:24},
    {id: 2, name: 'Rachel', age:25},
    {id: 3, name: 'Jessica', age: 37},
    {id: 4, name: 'Poornima', age:31},
  ]
}
