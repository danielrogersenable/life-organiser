import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringTaskViewComponent } from './recurring-task-view.component';

describe('RecurringTaskViewComponent', () => {
  let component: RecurringTaskViewComponent;
  let fixture: ComponentFixture<RecurringTaskViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringTaskViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
