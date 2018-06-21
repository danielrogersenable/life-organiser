import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';
import { TaskTypeForm } from '../task-type-form';
import { TaskTypeService } from '../task-type.service';

@Component({
  selector: 'app-task-type-detail',
  templateUrl: './task-type-detail.component.html',
  styleUrls: ['./task-type-detail.component.scss'],
  providers: [
    { provide: TaskTypeForm, useFactory: () => new TaskTypeForm() }
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
    if (this.form.invalid){
      return;
    }

    this.taskType = this.form.getValue();

    this.taskTypeService.updateTaskType(this.taskType)
    .first()
    .do(() => {
      this.saveEvent.emit();
    })
    .subscribe();
  }
}
