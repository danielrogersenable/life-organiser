import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TaskTypeDto } from './task-type.dto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskTypeService {

  constructor(private http: HttpClient) { }

  private taskTypesUrl = `${environment.apiRootUri}/task-types`;

  getTaskTypes(): Observable<TaskTypeDto[]> {
    return this.http.get<TaskTypeDto[]>(this.taskTypesUrl);
  }
}
