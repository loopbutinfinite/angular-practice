import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalTestComponent } from './conditional-test-component';

describe('ConditionalTestComponent', () => {
  let component: ConditionalTestComponent;
  let fixture: ComponentFixture<ConditionalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalTestComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
