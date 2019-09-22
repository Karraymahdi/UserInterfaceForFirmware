import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmwareUpdaterComponent } from './firmware-updater.component';

describe('FirmwareUpdaterComponent', () => {
  let component: FirmwareUpdaterComponent;
  let fixture: ComponentFixture<FirmwareUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmwareUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmwareUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
