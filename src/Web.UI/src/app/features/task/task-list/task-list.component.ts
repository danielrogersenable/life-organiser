import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskDto } from '../task.dto';

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

  displayedColumns = ["name", "dateDue", "completed", "completedDate", "scheduledDate", "durationInMinutes", "editLink"]; 

  tasks: TaskDto[];
  selectedTask: TaskDto;

  onSelect(task: TaskDto): void {
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
