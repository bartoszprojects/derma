import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOtitsComponent } from './step-otits.component';

describe('StepOtitsComponent', () => {
  let component: StepOtitsComponent;
  let fixture: ComponentFixture<StepOtitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOtitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOtitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
