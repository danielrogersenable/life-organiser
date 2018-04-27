import { Component, OnInit, Input } from '@angular/core';
import { TaskDto } from '../task.dto';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

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
      this.task.dateDue = new Date().toString();
    }
    console.log(this.task);
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

  logDateValue(): void{
    console.log(this.task.dateDue);
  }

}
