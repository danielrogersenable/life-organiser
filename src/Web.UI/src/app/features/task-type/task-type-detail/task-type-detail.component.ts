import {
    Component,
    OnInit,
    Input,
    OnDestroy,
    OnChanges,
    SimpleChanges,
    EventEmitter,
    Output
} from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';
import { TaskTypeForm } from '../task-type-form';
import { TaskTypeService } from '../task-type.service';
import { ErrorService } from '../../../shared/error/error.service';
import { first, tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export function taskTypeFormFactory() {
    return new TaskTypeForm();
}

@Component({
    selector: 'app-task-type-detail',
    templateUrl: './task-type-detail.component.html',
    styleUrls: ['./task-type-detail.component.scss'],
    providers: [{ provide: TaskTypeForm, useFactory: taskTypeFormFactory }]
})
export class TaskTypeDetailComponent implements OnInit, OnChanges, OnDestroy {
    constructor(
        public form: TaskTypeForm,
        public taskTypeService: TaskTypeService,
        public errorService: ErrorService
    ) {}

    @Input() public taskType: TaskTypeDto;
    @Output() public saveEvent = new EventEmitter();

    ngOnInit() {
        this.form.setValue(this.taskType);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.form.setValue(this.taskType);
    }

    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }
    
    get canDelete(): boolean {
        return this.taskType && this.taskType.id !== 0;
    }

    public delete(): void {
        this.taskTypeService
            .deleteTaskType(this.taskType.id)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(() => {
                    this.saveEvent.emit();
                })
            )
            .subscribe();
    }

    public save(): void {
        if (this.form.invalid) {
            return;
        }

        this.taskType = this.form.getValue();

        if (this.taskType.id === 0) {
            this.add();
        } else {
            this.update();
        }
    }

    private update(): void {
        this.taskTypeService
            .updateTaskType(this.taskType)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(() => {
                    this.saveEvent.emit();
                })
            )
            .subscribe();
    }

    private add(): void {
        this.taskTypeService
            .addTaskType(this.taskType)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                tap(() => {
                    this.saveEvent.emit();
                })
            )
            .subscribe();
    }
}
