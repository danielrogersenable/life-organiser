import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskDto } from '../task.dto';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { first, tap } from 'rxjs/operators';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService,
        private location: Location
    ) {}
    id: number;
    task: TaskDto;
    isEditView: boolean = false;

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.taskService
            .getTask(this.id)
            .pipe(
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
