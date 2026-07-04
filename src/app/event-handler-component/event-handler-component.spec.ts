import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandlerComponent } from './event-handler-component';

describe('EventHandlerComponent', () => {
  let component: EventHandlerComponent;
  let fixture: ComponentFixture<EventHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandlerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventHandlerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
