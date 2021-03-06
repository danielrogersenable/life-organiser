import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TaskDto } from '../task.dto';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskForm, taskFormFactory } from './task-form';
import { TaskTypeDto } from '../../task-type/task-type.dto';
import { TaskTypeService } from '../../task-type/task-type.service';
import { tap, first, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { TaskDeleteModalComponent } from '../task-delete-modal/task-delete-modal.component';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss'],
    providers: [{ provide: TaskForm, useFactory: taskFormFactory }]
})
export class TaskDetailComponent implements OnInit, OnDestroy {
    constructor(
        public form: TaskForm,
        public dialog: MatDialog,
        private taskService: TaskService,
        private taskTypeService: TaskTypeService,
        private router: Router
    ) {}

    @Input() public task: TaskDto;
    public isNew = true;
    public taskTypes: TaskTypeDto[];

    ngOnInit() {
        this.taskTypeService
            .getTaskTypes()
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(taskTypes => {
                    this.taskTypes = taskTypes;
                })
            )
            .subscribe();

        this.isNew = !this.task;
        if (this.isNew) {
            this.task = new TaskDto();
            this.task.id = 0;
            this.task.name = null;
            this.task.completed = false;
            this.task.completedDate = null;
            this.task.dateDue = new Date().toString();
            this.task.scheduledDate = new Date().toString();
            this.task.durationInMinutes = 0;
            this.task.taskTypeId = null;
            this.task.description = null;
        }
        this.form.setValue(this.task);
    }

    
    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    save() {
        if (this.form.invalid) {
            return;
        }

        this.task = this.form.getValue();

        if (this.isNew) {
            this.add();
        } else {
            this.update();
        }
    }

    add(): void {
        this.taskService
            .addTask(this.task)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(() => this.router.navigateByUrl('/tasks'))
            )
            .subscribe();
    }

    update(): void {
        this.taskService
            .updateTask(this.task)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(() => this.router.navigateByUrl('/tasks'))
            )
            .subscribe();
    }

    deleteModal(): void {
        const dialogRef = this.dialog.open(TaskDeleteModalComponent);

        dialogRef.afterClosed()
        .pipe(
            takeUntil(this._destroyed$),
            tap((result: boolean) => {
                if (result){
                    this.delete();
                }
            }))
        .subscribe();
    }

    delete(): void {
        this.taskService
            .deleteTask(this.task.id)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(() => {
                    this.router.navigateByUrl('/tasks');
                })
            )
            .subscribe();
    }
}
