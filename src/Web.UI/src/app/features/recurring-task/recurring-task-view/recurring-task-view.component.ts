import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RecurringTaskService } from '../recurring-task.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { RecurringTaskListingDto, RecurrenceType } from '../recurring-task.dto';
import { trigger, transition, style, animate, state, group } from '@angular/animations';

@Component({
  selector: 'app-recurring-task-view',
  templateUrl: './recurring-task-view.component.html',
  styleUrls: ['./recurring-task-view.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('expanded', style({
          'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('hidden', style({
          'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('expanded => hidden', [group([
          animate('400ms ease-in-out', style({
              'opacity': '0'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '0px'
          })),
          animate('700ms ease-in-out', style({
              'visibility': 'hidden'
          }))
      ]
      )]),
      transition('hidden => expanded', [group([
          animate('1ms ease-in-out', style({
              'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '500px'
          })),
          animate('800ms ease-in-out', style({
              'opacity': '1'
          }))
      ]
      )])
  ])
]
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
