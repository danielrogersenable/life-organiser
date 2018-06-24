import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskTypeDto } from './task-type.dto';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskTypeService {
    constructor(private http: HttpClient) {}

    private taskTypesUrl = `${environment.apiRootUri}/task-types`;

    getTaskTypes(): Observable<TaskTypeDto[]> {
        return this.http.get<TaskTypeDto[]>(this.taskTypesUrl);
    }

    updateTaskType(task: TaskTypeDto): Observable<any> {
        return this.http.put(this.taskTypesUrl, task, httpOptions);
    }

    addTaskType(task: TaskTypeDto): Observable<any> {
        return this.http.post(this.taskTypesUrl, task, httpOptions);
    }

    deleteTaskType(taskTypeId: number): Observable<any> {
        const url = `${this.taskTypesUrl}/${taskTypeId}`;
        return this.http.delete(url);
    }
}
