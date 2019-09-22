import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DW1000SETTINGSComponent } from './dw1000-settings.component';

describe('DW1000SETTINGSComponent', () => {
  let component: DW1000SETTINGSComponent;
  let fixture: ComponentFixture<DW1000SETTINGSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DW1000SETTINGSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DW1000SETTINGSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
