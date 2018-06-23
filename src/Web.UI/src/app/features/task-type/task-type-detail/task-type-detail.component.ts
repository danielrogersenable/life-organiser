import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';
import { TaskTypeForm } from '../task-type-form';
import { TaskTypeService } from '../task-type.service';

export function taskTypeFormFactory() {
  return new TaskTypeForm();
}

@Component({
  selector: 'app-task-type-detail',
  templateUrl: './task-type-detail.component.html',
  styleUrls: ['./task-type-detail.component.scss'],
  providers: [
    { provide: TaskTypeForm, useFactory: taskTypeFormFactory }
  ]
})
export class TaskTypeDetailComponent implements OnInit, OnChanges {

  constructor(
    public form: TaskTypeForm,
    public taskTypeService: TaskTypeService) { }

  @Input() public taskType: TaskTypeDto;
  @Output() public saveEvent = new EventEmitter();

  ngOnInit() {
    this.form.setValue(this.taskType);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.setValue(this.taskType);
  }

  public save(): void {
    if (this.form.invalid) {
      return;
    }

    this.taskType = this.form.getValue();

    if (this.taskType.id === 0) {
      this.add();
    } else{
      this.update();
    }
  }

  private update(): void {
    this.taskTypeService.updateTaskType(this.taskType)
    .first()
    .do(() => {
      this.saveEvent.emit();
    })
    .subscribe();
  }
  
  private add(): void {
    this.taskTypeService.addTaskType(this.taskType)
    .first()
    .do(() => {
      this.saveEvent.emit();
    })
    .subscribe();
  }
}
