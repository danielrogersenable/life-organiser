import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';
import { TaskTypeService } from '../task-type.service';
import { first, map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-task-type-listing',
    templateUrl: './task-type-listing.component.html',
    styleUrls: ['./task-type-listing.component.scss']
})
export class TaskTypeListingComponent implements OnInit, OnDestroy {
    constructor(private taskTypeService: TaskTypeService) {}

    taskTypes: TaskTypeDto[];

    selectedTaskType: TaskTypeDto;

    ngOnInit() {
        this.getTaskTypes();
    }
    
    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    getTaskTypes(): void {
        this.taskTypeService
            .getTaskTypes()
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                map(taskTypes => {
                    this.taskTypes = taskTypes;
                })
            )
            .subscribe();
    }

    addTaskType(): void {
        this.selectedTaskType = new TaskTypeDto();
    }

    public detailComponentSaved(): void {
        this.selectedTaskType = null;
        this.taskTypes = null;
        this.getTaskTypes();
    }
}
