import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecurringTaskService } from '../recurring-task.service';
import { RecurringTaskListingDto } from '../recurring-task.dto';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-recurring-task-list',
  templateUrl: './recurring-task-list.component.html',
  styleUrls: ['./recurring-task-list.component.scss']
})
export class RecurringTaskListComponent implements OnInit, OnDestroy {

  constructor(private recurringTaskService: RecurringTaskService) { }

  recurringTasks: RecurringTaskListingDto[];

  ngOnInit() {
    this.getRecurringTasks();
  }
  
  private _destroyed$ = new Subject();

  ngOnDestroy() {
      this._destroyed$.next();
      this._destroyed$.complete();
  }

  getRecurringTasks(): void {
    this.recurringTaskService.getRecurringTasks()
    .pipe(
        takeUntil(this._destroyed$),
        tap(tasks => {
            this.recurringTasks = tasks;
        })
    )
    .subscribe();
}

}
