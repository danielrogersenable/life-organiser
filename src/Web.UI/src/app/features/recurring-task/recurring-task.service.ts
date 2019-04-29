import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RecurringTaskListingDto } from './recurring-task.dto';

@Injectable({
  providedIn: 'root'
})
export class RecurringTaskService {

  constructor(private http: HttpClient) { }

  private recurringTasksUrl = `${environment.apiRootUri}/recurringTasks`;

  getRecurringTasks(): Observable<RecurringTaskListingDto[]>{
    return this.http.get<RecurringTaskListingDto[]>(this.recurringTasksUrl);
  }
}
