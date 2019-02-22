import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCadesiComponent } from './step-cadesi.component';

describe('StepCadesiComponent', () => {
  let component: StepCadesiComponent;
  let fixture: ComponentFixture<StepCadesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepCadesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCadesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
