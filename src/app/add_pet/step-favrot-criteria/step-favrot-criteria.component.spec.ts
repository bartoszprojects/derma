import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFavrotCriteriaComponent } from './step-favrot-criteria.component';

describe('StepFavrotCriteriaComponent', () => {
  let component: StepFavrotCriteriaComponent;
  let fixture: ComponentFixture<StepFavrotCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFavrotCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFavrotCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
