import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAtopiaWelcomeComponent } from './smart-atopia-welcome.component';

describe('SmartAtopiaWelcomeComponent', () => {
  let component: SmartAtopiaWelcomeComponent;
  let fixture: ComponentFixture<SmartAtopiaWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAtopiaWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAtopiaWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
