import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../../task/task.service';
import { ScheduledTasksQueryDto } from '../scheduled-tasks-query.dto';
import { ScheduledTaskDto } from '../scheduled-tasks.dto';
import * as moment from 'moment';
import { convertMomentToString } from '../../../shared/date/moment-date-adapter';
import { first, tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
    constructor(public taskService: TaskService) {}

    public todaysTasks: ScheduledTaskDto[];
    public weeksTasks: ScheduledTaskDto[];
    public futureTasks: ScheduledTaskDto[];

    private _destroyed$ = new Subject();

    ngOnInit() {
        this.getTodaysTasks();
        this.getWeekTasks();
        this.getFutureTasks();
    }

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    public getTodaysTasks(): void {
        const today = moment().startOf('day');

        const model = new ScheduledTasksQueryDto();

        model.fromDate = convertMomentToString(today);
        model.toDate = convertMomentToString(today.add(1, 'day'));

        this.taskService
            .getScheduledTasks(model)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(result => {
                    this.todaysTasks = result;
                })
            )
            .subscribe();
    }

    public getWeekTasks(): void {
      const today = moment().startOf('day');

      const model = new ScheduledTasksQueryDto();

      model.fromDate = convertMomentToString(today.add(1, 'day'));
      model.toDate = convertMomentToString(today.add(7, 'day'));

      this.taskService
          .getScheduledTasks(model)
          .pipe(
            takeUntil(this._destroyed$),
            first(),
              tap(result => {
                this.weeksTasks = result;
            })
          )
          .subscribe();
  }

  public getFutureTasks(): void {
    const today = moment().startOf('day');

    const model = new ScheduledTasksQueryDto();

    model.fromDate = convertMomentToString(today.add(7, 'day'));
    model.toDate = null;

    this.taskService
        .getScheduledTasks(model)
        .pipe(
            takeUntil(this._destroyed$),
            first(),
            tap(result => {
                this.futureTasks = result;
            })
        )
        .subscribe();
}
}
