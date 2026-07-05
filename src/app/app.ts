import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test-component/test-component';
import { EventHandlerComponent } from './event-handler-component/event-handler-component';
import { EventHandlerButtonComponent } from './event-handler-button-component/event-handler-button-component';
import { LandingPageComponent } from './landing-page-component/landing-page-component';
import { IteratingComponent } from './iterating-component/iterating-component';

// This is the main component file for the app
// With Angular, if we wanted to call other components in this page like in Next.js, we need to import the class name of the component we want to use in the imports array. As well as call the component selector name in the template below.
// Note: In this example, we are doing the HTML here in the component, but normally with a bigger project, you would want to do this in its own dedicated html file, the app.htmlm file.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventHandlerComponent, EventHandlerButtonComponent, LandingPageComponent, IteratingComponent],
  styleUrl: './app.css',
  template: `
    <h1>Practice with Angular</h1>
    <app-landing-page-component></app-landing-page-component>
    <app-event-handler-component></app-event-handler-component>
     <app-event-handler-button-component></app-event-handler-button-component>
    <app-iterating-component></app-iterating-component>
      

  `,
})
export class App {
  protected readonly title = signal('angular-practice');
}
