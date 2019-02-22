import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBreedComponent } from './step-breed.component';

describe('StepBreedComponent', () => {
  let component: StepBreedComponent;
  let fixture: ComponentFixture<StepBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
