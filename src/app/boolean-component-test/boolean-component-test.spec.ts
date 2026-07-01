import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanComponentTest } from './boolean-component-test';

describe('BooleanComponentTest', () => {
  let component: BooleanComponentTest;
  let fixture: ComponentFixture<BooleanComponentTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooleanComponentTest],
    }).compileComponents();

    fixture = TestBed.createComponent(BooleanComponentTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
