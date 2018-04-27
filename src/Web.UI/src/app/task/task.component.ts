import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  id: number;
  isLoaded: boolean = false;

  ngOnInit() {
    if (this.task) {
      this.isLoaded = true;
    }
    else {
      this.getTask();
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(() => this.goBack());
  }

  getTask(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(this.id)
      .subscribe(task => {
        this.task = task;
        this.isLoaded = true;
      });
  }
}
