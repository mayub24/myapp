import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPicComponent } from './main-pic.component';

describe('MainPicComponent', () => {
  let component: MainPicComponent;
  let fixture: ComponentFixture<MainPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
