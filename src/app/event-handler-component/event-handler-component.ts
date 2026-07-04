import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handler-component',
  imports: [],
  styleUrl: './event-handler-component.css',
  template: `<section (mouseover)="displaySecretMessage()">There's a secret message hidden here, to uncover it. Hover you mouse over this sentence. {{message}}</section>`,
})
export class EventHandlerComponent {
  message = '';

  displaySecretMessage() {
    this.message = 'If you see this message, event handler fired!';
  }
}
