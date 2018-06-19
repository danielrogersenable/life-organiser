import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeListingComponent } from './task-type-listing.component';

describe('TaskTypeListingComponent', () => {
  let component: TaskTypeListingComponent;
  let fixture: ComponentFixture<TaskTypeListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTypeListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTypeListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
