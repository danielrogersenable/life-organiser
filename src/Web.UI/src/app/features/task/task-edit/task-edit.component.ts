import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskDto } from '../task.dto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { first, tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit, OnDestroy {
    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService,
        private location: Location
    ) {}
    id: number;
    task: TaskDto;
    isEditView: boolean = false;
    
    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.taskService
            .getTask(this.id)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(result => {
                    this.task = result;
                })
            )
            .subscribe();
    }

    public back(): void {
        this.location.back();
    }

    public toggleEditView(): void {
        console.log('toggle edit');
        this.isEditView = !this.isEditView;
    }
}
