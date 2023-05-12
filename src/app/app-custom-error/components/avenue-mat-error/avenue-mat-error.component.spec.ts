import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenueMatErrorComponent } from './avenue-mat-error.component';

describe('AvenueMatErrorComponent', () => {
  let component: AvenueMatErrorComponent;
  let fixture: ComponentFixture<AvenueMatErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvenueMatErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvenueMatErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
