import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RecurringTaskService } from '../recurring-task.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { RecurringTaskListingDto, RecurrenceType } from '../recurring-task.dto';
import { trigger, transition, style, animate, state, group } from '@angular/animations';
import { SlideInOutAnimation } from '@app/shared/animations/slideInOut';

@Component({
  selector: 'app-recurring-task-view',
  templateUrl: './recurring-task-view.component.html',
  styleUrls: ['./recurring-task-view.component.scss'],
  animations: [SlideInOutAnimation]
})
export class RecurringTaskViewComponent implements OnInit {

  @Input() recurringTask: RecurringTaskListingDto
  constructor() { }

  animationState = 'hidden';

  recurrenceName = "Recurrence";
  recurrenceClass = "recurrence";
  recurrenceText: string;

  typeName="Task type";
  typeClass="type";
  typeText: string;

  taskTotalName="Total tasks scheduled";
  taskTotalClass="total";
  taskTotalText: string;

ngOnInit() {
  this.populateRecurrenceText();
  this.populateTypeText();
  this.populateTaskTotalText();
}

toggleExpansion(): void {
  this.animationState = this.animationState === 'expanded' ? 'hidden' : 'expanded';
}

getRecurringTaskName(): string {
  return this.recurringTask.name ? this.recurringTask.name :'Task name here';
}

getRecurringTaskDescription(): string {
  return this.recurringTask.description ? this.recurringTask.description :'Write a description here';
}

populateTaskTotalText(): void {
  if (!this.recurringTask || !this.recurringTask.tasks){
    this.taskTotalText = "0";
  } else {
    this.taskTotalText = this.recurringTask.tasks.length.toString();
  }
  console.log(this.taskTotalText);
}

populateTypeText(): void {
  if (!this.recurringTask || !this.recurringTask.taskType){
    this.typeText = "None";
  } else {
    this.typeText = this.recurringTask.taskType.name;
  }
}

populateRecurrenceText(): void {
  if (!this.recurringTask){
    this.recurrenceText = "nah";
    return;
  }

  switch(this.recurringTask.taskRecurrenceType){
    case RecurrenceType.Day:
    {
      if (this.recurringTask.recurrenceInterval == 1){
        this.recurrenceText = "Every day";
      } else{
        this.recurrenceText = `Every ${this.recurringTask.recurrenceInterval} days`;
      }
      break;
    }
    case RecurrenceType.Week:
    {
      if (this.recurringTask.recurrenceInterval == 1){
        this.recurrenceText = "Every week";
      } else{
        this.recurrenceText = `Every ${this.recurringTask.recurrenceInterval} weeks`;
      }
      break;
    }
    case RecurrenceType.Month:
    {
      if (this.recurringTask.recurrenceInterval == 1){
        this.recurrenceText = "Every month";
      } else{
        this.recurrenceText = `Every ${this.recurringTask.recurrenceInterval} months`;
      }
      break;
    }
    case RecurrenceType.Year:
    {
      if (this.recurringTask.recurrenceInterval == 1){
        this.recurrenceText = "Every year";
      } else{
        this.recurrenceText = `Every ${this.recurringTask.recurrenceInterval} years`;
      }
      break;
    }
    default:
      {
      this.recurrenceText = "Not set";
    }
  }
}
}
