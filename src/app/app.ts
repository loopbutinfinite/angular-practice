import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component/test-component';
import { EventHandlerComponent } from './event-handler-component/event-handler-component';

// This is the main component file for the app
// With Angular, if we wanted to call other components in this page like in Next.js, we need to import the class name of the component we want to use in the imports array. As well as call the component selector name in the template below.
// Note: In this example, we are doing the HTML here in the component, but normally with a bigger project, you would want to do this in its own dedicated html file, the app.htmlm file.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventHandlerComponent],
  styleUrl: './app.css',
  template: `
    <h1>Practice with Angular</h1>
    <!-- <app-event-handler-component></app-event-handler-component> -->
     
  `,
})
export class App {
  protected readonly title = signal('angular-practice');
}
