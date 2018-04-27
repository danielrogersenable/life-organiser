import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Location } from '@angular/common';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  task: Task;
  model: NgbDateStruct;

  constructor(
    private taskService: TaskService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.task = new Task();
    this.task.id = 0;
    this.task.name = 'sample';
    this.task.completed = false;
    this.task.completedDate = null;
    this.task.dateDue = '01/01/2018';
  }

  add(): void {
    console.log(this.model);
    this.taskService.addTask(this.task)
      .subscribe(() => this.goBack());
  }
}
