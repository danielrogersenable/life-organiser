import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskDto } from '../task.dto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }
  
  @Input() public task: TaskDto;
  @Output() public toggleEditView = new EventEmitter();

  ngOnInit() {
  }

  public startEdit(){
    console.log('called startEdit');
    this.toggleEditView.emit();
  }

  public getStatusText(): string {
    const completeText = this.getCompletedText();

    const statusText = this.getTypeText();

    if (!statusText){
      return completeText;
    }
    else{
      return statusText + ' / ' + completeText;
    }
  }

  private getCompletedText(): string {
    if (this.task.completed){
      return "Completed on " + this.datePipe.transform(this.task.completedDate, 'fullDate');
    }
    else{
      return "Incomplete";
    }
  }

  private getTypeText(): string {
    if (!this.task.taskTypeId){
      return null;
    }
    else {
      return this.task.taskType;
    }
  }

  public getDurationText(): string {
    return this.task.durationInMinutes + ' minutes';
  }
}
