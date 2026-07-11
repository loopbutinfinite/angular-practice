import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCard2 } from './info-card-2';

describe('InfoCard2', () => {
  let component: InfoCard2;
  let fixture: ComponentFixture<InfoCard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCard2],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCard2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
