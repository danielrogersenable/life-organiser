import { Component, OnInit, Input } from '@angular/core';
import { TaskTypeDto } from '../task-type.dto';

@Component({
  selector: 'app-task-type-detail',
  templateUrl: './task-type-detail.component.html',
  styleUrls: ['./task-type-detail.component.scss']
})
export class TaskTypeDetailComponent implements OnInit {

  constructor() { }

  @Input() public taskType: TaskTypeDto;

  ngOnInit() {
  }

}
