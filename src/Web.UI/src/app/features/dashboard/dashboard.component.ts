import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { TaskDto } from '../task/task.dto';
import { TaskTypeService } from '../task-type/task-type.service';
import { first, tap } from 'rxjs/operators';
import { TaskTypeDto } from '../task-type/task-type.dto';
import { ScheduledTaskDto } from '../schedule/scheduled-tasks.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  randomTask: ScheduledTaskDto;

  ngOnInit() {
    this.getRandomTask();
  }

  getRandomTask() {
    this.taskService.getRandomTask()
    .subscribe((result) => {
      this.randomTask = result;
    })
  }
}
