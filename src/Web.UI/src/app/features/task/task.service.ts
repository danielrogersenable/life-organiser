import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from '../../../environments/environment';
import { TaskDto } from './task.dto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  private tasksUrl = `${environment.apiRootUri}/tasks`;

  getTasks(): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(this.tasksUrl);
  }

  getTask(id: number): Observable<TaskDto> {
    //return of(TASKS.find(task => task.id === id));
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<TaskDto>(url);
  }

  updateTask(task: TaskDto): Observable<any> {
    return this.http.put(this.tasksUrl, task, httpOptions);
  }

  addTask(task: TaskDto): Observable<any> {
    return this.http.post(this.tasksUrl, task, httpOptions);
  }

}
