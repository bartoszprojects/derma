import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPhysicalComponent } from './step-physical.component';

describe('StepPhysicalComponent', () => {
  let component: StepPhysicalComponent;
  let fixture: ComponentFixture<StepPhysicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPhysicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
