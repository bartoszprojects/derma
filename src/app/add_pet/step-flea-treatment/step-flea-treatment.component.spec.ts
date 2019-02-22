import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFleaTreatmentComponent } from './step-flea-treatment.component';

describe('StepFleaTreatmentComponent', () => {
  let component: StepFleaTreatmentComponent;
  let fixture: ComponentFixture<StepFleaTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFleaTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFleaTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
