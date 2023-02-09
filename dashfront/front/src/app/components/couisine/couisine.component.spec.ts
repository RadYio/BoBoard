import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouisineComponent } from './couisine.component';

describe('CouisineComponent', () => {
  let component: CouisineComponent;
  let fixture: ComponentFixture<CouisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouisineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
