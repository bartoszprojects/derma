import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSucessComponent } from './step-sucess.component';

describe('StepSucessComponent', () => {
  let component: StepSucessComponent;
  let fixture: ComponentFixture<StepSucessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSucessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
