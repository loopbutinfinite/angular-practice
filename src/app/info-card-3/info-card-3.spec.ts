import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCard3 } from './info-card-3';

describe('InfoCard3', () => {
  let component: InfoCard3;
  let fixture: ComponentFixture<InfoCard3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCard3],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCard3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
