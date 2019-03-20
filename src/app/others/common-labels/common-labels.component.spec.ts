import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLabelsComponent } from './common-labels.component';

describe('CommonLabelsComponent', () => {
  let component: CommonLabelsComponent;
  let fixture: ComponentFixture<CommonLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
