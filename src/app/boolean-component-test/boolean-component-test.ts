import { Component } from '@angular/core';

//This is a test component that will dynamically display content dependant on conditionals
@Component({
  selector: 'app-boolean-component-test',
  imports: [],
  styleUrl: './boolean-component-test.css',
  //Removing the Url allows us to the html directly in the component rather that in the .html file
  //For large scale project, do not do it like this.
  template: ` 
  @if(isServerRunning){
    <span>Yes, the server is running!</span>
  } @else {
    <span>No, server is not running.</span>
  }
  `,
})
export class BooleanComponentTest {
  isServerRunning = true;
}
