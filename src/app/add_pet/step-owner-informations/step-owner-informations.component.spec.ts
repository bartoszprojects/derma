import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOwnerInformationsComponent } from './step-owner-informations.component';

describe('StepOwnerInformationsComponent', () => {
  let component: StepOwnerInformationsComponent;
  let fixture: ComponentFixture<StepOwnerInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOwnerInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOwnerInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
