import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSexComponent } from './step-sex.component';

describe('StepSexComponent', () => {
  let component: StepSexComponent;
  let fixture: ComponentFixture<StepSexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
