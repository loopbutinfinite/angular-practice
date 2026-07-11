import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCard1 } from './info-card-1';

describe('InfoCard1', () => {
  let component: InfoCard1;
  let fixture: ComponentFixture<InfoCard1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCard1],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCard1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
