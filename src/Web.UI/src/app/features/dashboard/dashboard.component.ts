import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../task/task.service';
import { TaskDto } from '../task/task.dto';
import { TaskTypeService } from '../task-type/task-type.service';
import { first, tap, takeUntil } from 'rxjs/operators';
import { TaskTypeDto } from '../task-type/task-type.dto';
import { ScheduledTaskDto } from '../schedule/scheduled-tasks.dto';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private taskService: TaskService) { }

  randomTask: ScheduledTaskDto;

  ngOnInit() {
    this.getRandomTask();
  }

  private _destroyed$ = new Subject();
    
  ngOnDestroy() {
      this._destroyed$.next();
      this._destroyed$.complete();
  }

  getRandomTask() {
    this.taskService.getRandomTask()
    .pipe(
      takeUntil(this._destroyed$),
      tap(result => {
        this.randomTask = result;
      })
    )
    .subscribe();
  }
}
