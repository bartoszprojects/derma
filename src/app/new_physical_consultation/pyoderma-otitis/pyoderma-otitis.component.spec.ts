import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyodermaOtitisComponent } from './pyoderma-otitis.component';

describe('PyodermaOtitisComponent', () => {
  let component: PyodermaOtitisComponent;
  let fixture: ComponentFixture<PyodermaOtitisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyodermaOtitisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyodermaOtitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
