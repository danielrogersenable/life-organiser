import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskDto } from '../task.dto';
import { TaskListingDto } from '../task-listing.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: TaskService,
  private router: Router) { }

  displayedColumns = ["name", "dateDue", "completed", "completedDate", "scheduledDate", "durationInMinutes", "taskType"]; 

  tasks: TaskListingDto[];
  selectedTask: TaskListingDto;

  ngOnInit() {
    this.getTasks();
  }

  onSelect(task: TaskListingDto): void {
    this.selectedTask = task;
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  editTask(id: number): void {
    console.log(id);
    this.router.navigateByUrl(`/task/${id}`);
  }
}
