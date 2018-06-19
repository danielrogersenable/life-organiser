import { Component, OnInit } from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';
import { TaskTypeService } from '../task-type.service';

@Component({
  selector: 'app-task-type-listing',
  templateUrl: './task-type-listing.component.html',
  styleUrls: ['./task-type-listing.component.scss']
})
export class TaskTypeListingComponent implements OnInit {

  constructor(private taskTypeService: TaskTypeService) { }

  taskTypes: TaskTypeDto[];

  selectedTaskType: TaskTypeDto;

  ngOnInit() {
    this.getTaskTypes();
  }

  getTaskTypes(): void {
    this.taskTypeService.getTaskTypes()
    .subscribe(taskTypes => {
      this.taskTypes = taskTypes;
    });
  }
}
