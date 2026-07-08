import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyMathComponent } from './input-property-math-component';

describe('InputPropertyMathComponent', () => {
  let component: InputPropertyMathComponent;
  let fixture: ComponentFixture<InputPropertyMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPropertyMathComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputPropertyMathComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
