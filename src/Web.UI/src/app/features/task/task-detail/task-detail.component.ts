import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { TaskDto } from '../task.dto';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskForm } from './task-form';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [
    { provide: TaskForm, useFactory: () => new TaskForm() }
  ]
})
export class TaskDetailComponent implements OnInit {

  constructor(
    public form: TaskForm,
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
    this.form.setValue(this.task);
    console.log(this.task);
  }

  save(){
    if (this.form.invalid){
      return;
    }

    this.task = this.form.getValue();

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