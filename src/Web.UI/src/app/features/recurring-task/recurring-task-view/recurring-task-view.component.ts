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
  panelClass: string = 'recurring-task-panel hidden';

ngOnInit() {
  this.populateRecurrenceText();
}

toggleExpansion(): void {
  this.animationState = this.animationState === 'expanded' ? 'hidden' : 'expanded';
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
  }
}
}
