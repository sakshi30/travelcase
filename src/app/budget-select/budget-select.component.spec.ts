import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSelectComponent } from './budget-select.component';

describe('BudgetSelectComponent', () => {
  let component: BudgetSelectComponent;
  let fixture: ComponentFixture<BudgetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
