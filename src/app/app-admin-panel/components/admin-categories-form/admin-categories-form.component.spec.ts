import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesFormComponent } from './admin-categories-form.component';

describe('AdminCategoriesFormComponent', () => {
  let component: AdminCategoriesFormComponent;
  let fixture: ComponentFixture<AdminCategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
