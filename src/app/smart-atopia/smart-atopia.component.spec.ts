import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAtopiaComponent } from './smart-atopia.component';

describe('SmartAtopiaComponent', () => {
  let component: SmartAtopiaComponent;
  let fixture: ComponentFixture<SmartAtopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAtopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAtopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
