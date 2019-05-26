import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { RecurringTaskService } from '../recurring-task.service';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { RecurringTaskListingDto } from '../recurring-task.dto';

@Component({
  selector: 'app-recurring-task-view',
  templateUrl: './recurring-task-view.component.html',
  styleUrls: ['./recurring-task-view.component.scss']
})
export class RecurringTaskViewComponent implements OnInit {

  @Input() recurringTask: RecurringTaskListingDto
  constructor() { }

ngOnInit() {
}

}
