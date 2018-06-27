import { Component, OnInit, Input } from '@angular/core';
import { ScheduledTaskDto } from '../scheduled-tasks.dto';
import { TaskService } from '../../task/task.service';
import { ScheduledTasksQueryDto } from '../scheduled-tasks-query.dto';

@Component({
    selector: 'app-schedule-listing',
    templateUrl: './schedule-listing.component.html',
    styleUrls: ['./schedule-listing.component.scss']
})
export class ScheduleListingComponent implements OnInit {
    @Input() taskListing: ScheduledTaskDto[];

    constructor() {}

    ngOnInit() {}

}
