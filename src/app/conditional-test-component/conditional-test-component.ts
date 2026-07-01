import { Component } from '@angular/core';

//This is another test component to work with components that display text dyanamically through conditions.
//This is just a simple test to simulate a user registering for a class.
@Component({
  selector: 'app-conditional-test-component',
  imports: [],
  styleUrl: './conditional-test-component.css',

  template: `
    @if(classLimit >= 5){
      <span>Sorry, there is no room. Class is at capacity.</span>
    } @else {
      <span>You are signed up!</span>
    }
  `,
})
export class ConditionalTestComponent {
  classLimit = 5;
}
