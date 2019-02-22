import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMalasseziaComponent } from './step-malassezia.component';

describe('StepMalasseziaComponent', () => {
  let component: StepMalasseziaComponent;
  let fixture: ComponentFixture<StepMalasseziaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepMalasseziaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepMalasseziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
