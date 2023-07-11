import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDefalutComponent } from './home-defalut.component';

describe('HomeDefalutComponent', () => {
  let component: HomeDefalutComponent;
  let fixture: ComponentFixture<HomeDefalutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDefalutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDefalutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
