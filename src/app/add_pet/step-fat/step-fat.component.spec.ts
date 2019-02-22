import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFatComponent } from './step-fat.component';

describe('StepFatComponent', () => {
  let component: StepFatComponent;
  let fixture: ComponentFixture<StepFatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
