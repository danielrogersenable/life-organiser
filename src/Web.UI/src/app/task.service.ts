import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  private tasksUrl = 'http://localhost:52965/api/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTask(id: number): Observable<Task> {
    //return of(TASKS.find(task => task.id === id));
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, httpOptions);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post(this.tasksUrl, task, httpOptions);
  }

}
