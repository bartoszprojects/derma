import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFoodAllergyComponent } from './step-food-allergy.component';

describe('StepFoodAllergyComponent', () => {
  let component: StepFoodAllergyComponent;
  let fixture: ComponentFixture<StepFoodAllergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFoodAllergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFoodAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
