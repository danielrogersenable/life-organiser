import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
  
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { AppRoutingModule } from './/app-routing.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';
import { TaskAddComponent } from './task-add/task-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    InstructionsComponent,
    TaskSummaryComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
