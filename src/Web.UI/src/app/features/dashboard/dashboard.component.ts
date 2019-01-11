import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task/task.service';
import { TaskDto } from '../task/task.dto';
import { TaskTypeService } from '../task-type/task-type.service';
import { first, tap } from 'rxjs/operators';
import { TaskTypeDto } from '../task-type/task-type.dto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private taskTypeService: TaskTypeService) { }

  randomTask: TaskDto;
  taskTypes: TaskTypeDto[];
  typeOfRandomTask: string;

  ngOnInit() {
    this.getTaskTypes();
    this.getRandomTask();
  }

  getTaskTypes(){
    this.taskTypeService
    .getTaskTypes()
    .pipe(
        first(),
        tap(taskTypes => {
            this.taskTypes = taskTypes;
        })
    )
    .subscribe(() => {
      this.getRandomTask();
    });
  }

  getRandomTask() {
    this.taskService.getRandomTask()
    .subscribe((result) => {
      this.randomTask = result;

      const taskType = this.taskTypes.filter(item => item.id == result.taskTypeId)[0];

      if (taskType){
        this.typeOfRandomTask = taskType.name;
      }
    })
  }
}
