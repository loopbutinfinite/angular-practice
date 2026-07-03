import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingComponent2 } from './property-binding-component2';

describe('PropertyBindingComponent2', () => {
  let component: PropertyBindingComponent2;
  let fixture: ComponentFixture<PropertyBindingComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyBindingComponent2],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyBindingComponent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
