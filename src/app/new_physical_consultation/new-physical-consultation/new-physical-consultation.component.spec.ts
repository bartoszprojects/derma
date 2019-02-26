import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhysicalConsultationComponent } from './new-physical-consultation.component';

describe('NewPhysicalConsultationComponent', () => {
  let component: NewPhysicalConsultationComponent;
  let fixture: ComponentFixture<NewPhysicalConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhysicalConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhysicalConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
