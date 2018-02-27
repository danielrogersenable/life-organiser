import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  tasks: Task[];
  selectedTask: Task;

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        console.log(tasks);
        this.tasks = tasks;
      });
  }
}
