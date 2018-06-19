import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task/task.service';
import { TaskTypeDto } from '../task-type.dto';

@Component({
  selector: 'app-task-type-listing',
  templateUrl: './task-type-listing.component.html',
  styleUrls: ['./task-type-listing.component.scss']
})
export class TaskTypeListingComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  taskTypes: TaskTypeDto[];

  ngOnInit() {
    this.getTaskTypes();
  }

  getTaskTypes(): void {
    this.taskService.getTaskTypes()
    .subscribe(taskTypes => {
      this.taskTypes = taskTypes;
    });
  }
}
