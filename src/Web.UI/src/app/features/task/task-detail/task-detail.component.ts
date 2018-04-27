import { Component, OnInit, Input } from '@angular/core';
import { TaskDto } from '../task.dto';
import { TaskService } from '../../../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private router: Router) { }

  @Input() public task: TaskDto
  public isNew = true;

  ngOnInit() {
    this.isNew = !this.task;
    if (this.isNew){
      this.task = new TaskDto();
      this.task.id = 0;
      this.task.name = 'sample';
      this.task.completed = false;
      this.task.completedDate = null;
      this.task.dateDue = '01/01/2018';
    }
  }

  save(){
    if (this.isNew){
      this.add()
    }
    else {
      this.update()
    }
  }

  add(): void {
    this.taskService.addTask(this.task)
    .first()
    .do(() => this.router.navigateByUrl('/tasks'))
    .subscribe();
  }

  update(): void {
    this.taskService.updateTask(this.task)
    .first()
    .do(() => this.router.navigateByUrl('/tasks'))
    .subscribe();
  }

}
