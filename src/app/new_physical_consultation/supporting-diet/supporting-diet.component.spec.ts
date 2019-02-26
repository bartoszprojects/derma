import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingDietComponent } from './supporting-diet.component';

describe('SupportingDietComponent', () => {
  let component: SupportingDietComponent;
  let fixture: ComponentFixture<SupportingDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
