import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteratingComponent } from './iterating-component';

describe('IteratingComponent', () => {
  let component: IteratingComponent;
  let fixture: ComponentFixture<IteratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IteratingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IteratingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
