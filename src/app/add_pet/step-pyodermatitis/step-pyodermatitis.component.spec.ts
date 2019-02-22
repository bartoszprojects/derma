import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPyodermatitisComponent } from './step-pyodermatitis.component';

describe('StepPyodermatitisComponent', () => {
  let component: StepPyodermatitisComponent;
  let fixture: ComponentFixture<StepPyodermatitisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPyodermatitisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPyodermatitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
