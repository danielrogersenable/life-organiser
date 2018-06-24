import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from '../../../environments/environment';
import { TaskDto } from './task.dto';
import { TaskListingDto } from './task-listing.dto';
import { TaskTypeDto } from '../task-type/task-type.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) {}

    private tasksUrl = `${environment.apiRootUri}/tasks`;

    getTasks(): Observable<TaskListingDto[]> {
        return this.http.get<TaskListingDto[]>(this.tasksUrl);
    }

    getTask(id: number): Observable<TaskDto> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.get<TaskDto>(url);
    }

    updateTask(task: TaskDto): Observable<any> {
        return this.http.put(this.tasksUrl, task, httpOptions);
    }

    addTask(task: TaskDto): Observable<any> {
        return this.http.post(this.tasksUrl, task, httpOptions);
    }

    deleteTask(id: number): Observable<any> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete(url);
    }
}
