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

  public getRelativeDueDate(){
    return this.getRelativeDateText(new Date(this.task.dateDue));
  }

  public getRelativeScheduledDate(){
    return this.getRelativeDateText(new Date(this.task.scheduledDate));
  }

  private getRelativeDateText(comparisonDate: Date): string {
    const now = new Date();
    comparisonDate.setHours(0,0,0);
    now.setHours(0,0,0);

    if (comparisonDate == now){
      return 'Today';
    }

    const timeDiff = Math.abs(comparisonDate.getTime() - now.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const isFutureDate = now < comparisonDate;

    if (daysDiff == 1){
      if (isFutureDate){
        return `Tomorrow`;
      }
      else {
        return `Yesterday`;
      }
    }

    if (daysDiff <= 14)
    {
      if (isFutureDate){
        return `In ${daysDiff} days`;
      }
      else {
        return `${daysDiff} days ago`;
      }
    }

    const weeksDiff = Math.ceil(daysDiff / 7);

    if (isFutureDate) {
      return `In ${weeksDiff} weeks`;
    }
    else {
      return `${weeksDiff} weeks ago`;
    }
  }
}
