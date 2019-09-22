import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsettingComponent } from './tagsetting.component';

describe('TagsettingComponent', () => {
  let component: TagsettingComponent;
  let fixture: ComponentFixture<TagsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
