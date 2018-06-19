import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTypeDetailComponent } from './task-type-detail.component';

describe('TaskTypeDetailComponent', () => {
  let component: TaskTypeDetailComponent;
  let fixture: ComponentFixture<TaskTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
