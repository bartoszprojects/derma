import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDrugsHistoryComponent } from './step-drugs-history.component';

describe('StepDrugsHistoryComponent', () => {
  let component: StepDrugsHistoryComponent;
  let fixture: ComponentFixture<StepDrugsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDrugsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDrugsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
