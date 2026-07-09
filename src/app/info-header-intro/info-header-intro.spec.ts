import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHeaderIntro } from './info-header-intro';

describe('InfoHeaderIntro', () => {
  let component: InfoHeaderIntro;
  let fixture: ComponentFixture<InfoHeaderIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoHeaderIntro],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoHeaderIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
