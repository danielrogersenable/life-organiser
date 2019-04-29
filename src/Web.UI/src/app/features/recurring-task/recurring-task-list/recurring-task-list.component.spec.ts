import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringTaskListComponent } from './recurring-task-list.component';

describe('RecurringTaskListComponent', () => {
  let component: RecurringTaskListComponent;
  let fixture: ComponentFixture<RecurringTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
