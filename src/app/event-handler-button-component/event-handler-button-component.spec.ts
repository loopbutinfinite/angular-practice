import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlerButtonComponent } from './event-handler-button-component';

describe('EventHandlerButtonComponent', () => {
  let component: EventHandlerButtonComponent;
  let fixture: ComponentFixture<EventHandlerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandlerButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventHandlerButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
