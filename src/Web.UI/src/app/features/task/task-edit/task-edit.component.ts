import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskDto } from '../task.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskService: TaskService) { }
  id: number;
  task: TaskDto;

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(this.id)
    .first()
    .do((result) =>{
      this.task = result;
    })
    .subscribe();
  }

}
