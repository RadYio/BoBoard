import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meteo2Component } from './meteo2.component';

describe('Meteo2Component', () => {
  let component: Meteo2Component;
  let fixture: ComponentFixture<Meteo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meteo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Meteo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
