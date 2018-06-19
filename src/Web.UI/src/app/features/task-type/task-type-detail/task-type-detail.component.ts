import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';
import { TaskTypeForm } from '../task-type-form';

@Component({
  selector: 'app-task-type-detail',
  templateUrl: './task-type-detail.component.html',
  styleUrls: ['./task-type-detail.component.scss'],
  providers: [
    { provide: TaskTypeForm, useFactory: () => new TaskTypeForm() }
  ]
})
export class TaskTypeDetailComponent implements OnInit, OnChanges {

  constructor(public form: TaskTypeForm) { }

  @Input() public taskType: TaskTypeDto;

  ngOnInit() {
    this.form.setValue(this.taskType);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.setValue(this.taskType);
  }

  public save(): void {
    console.log('saving');
  }
}
