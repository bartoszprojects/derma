import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepWeightComponent } from './step-weight.component';

describe('StepWeightComponent', () => {
  let component: StepWeightComponent;
  let fixture: ComponentFixture<StepWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
