import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handler-component',
  imports: [],
  templateUrl: './event-handler-component.html',
  styleUrl: './event-handler-component.css',
})
export class EventHandlerComponent {
  message = '';

  displaySecretMessage() {
    this.message = 'If you see this message, event handler fired!';
  }
}
