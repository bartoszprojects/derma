import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDesensitizedComponent } from './step-desensitized.component';

describe('StepDesensitizedComponent', () => {
  let component: StepDesensitizedComponent;
  let fixture: ComponentFixture<StepDesensitizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDesensitizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDesensitizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
