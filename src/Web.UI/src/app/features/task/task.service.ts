import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TaskDto } from './task.dto';
import { TaskListingDto } from './task-listing.dto';
import { TaskTypeDto } from '../task-type/task-type.dto';
import { ScheduledTasksQueryDto } from '../schedule/scheduled-tasks-query.dto';
import { ScheduledTaskDto } from '../schedule/scheduled-tasks.dto';

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

    getRandomTask(): Observable<TaskDto> {
        const url = `${this.tasksUrl}/random-task`;
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

    getScheduledTasks(model: ScheduledTasksQueryDto): Observable<ScheduledTaskDto[]> {
        const url = `${this.tasksUrl}/scheduled-tasks`;
        return this.http.post<ScheduledTaskDto[]>(url, model);
    }
}
