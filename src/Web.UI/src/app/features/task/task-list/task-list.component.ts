import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskDto } from '../task.dto';
import { TaskListingDto } from '../task-listing.dto';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
    constructor(private taskService: TaskService, private router: Router) {}

    displayedColumns = [
        'name',
        'dateDue',
        'completed',
        'completedDate',
        'scheduledDate',
        'durationInMinutes',
        'taskType'
    ];

    tasks: TaskListingDto[];
    selectedTask: TaskListingDto;

    ngOnInit() {
        this.getTasks();
    }

    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    onSelect(task: TaskListingDto): void {
        this.selectedTask = task;
    }

    getTasks(): void {
        this.taskService.getTasks()
        .pipe(
            takeUntil(this._destroyed$),
            tap(tasks => {
                this.tasks = tasks;
            })
        )
        .subscribe();
    }

    editTask(id: number): void {
        console.log(id);
        this.router.navigateByUrl(`/task/${id}`);
    }
}
