import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handler-button-component',
  imports: [],
  templateUrl: './event-handler-button-component.html',
  styleUrl: './event-handler-button-component.css',
})
export class EventHandlerButtonComponent {
  message = "Default Message. Click me to display a new message.";
  displayMessageOnClick(){
    this.message = "Success! The button event handler fired.";
  }
}
