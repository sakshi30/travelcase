import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodSelectComponent } from './mood-select.component';

describe('MoodSelectComponent', () => {
  let component: MoodSelectComponent;
  let fixture: ComponentFixture<MoodSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
