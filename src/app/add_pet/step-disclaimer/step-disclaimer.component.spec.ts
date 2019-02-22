import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDisclaimerComponent } from './step-disclaimer.component';

describe('StepDisclaimerComponent', () => {
  let component: StepDisclaimerComponent;
  let fixture: ComponentFixture<StepDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
