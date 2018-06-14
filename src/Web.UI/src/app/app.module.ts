import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule, MatInputModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { TaskAddComponent } from './features/task/task-add/task-add.component';
import { NgbModule, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateNativeAdapter } from './shared/datepicker-adapter';
import { TaskDetailComponent } from './features/task/task-detail/task-detail.component';
import { TaskListComponent } from './features/task/task-list/task-list.component';
import { TaskService } from './features/task/task.service';
import { TaskEditComponent } from './features/task/task-edit/task-edit.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignInService } from './features/sign-in/sign-in.service';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    InstructionsComponent,
    TaskAddComponent,
    TaskDetailComponent,
    TaskEditComponent,
    SignInComponent,
    TestComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    TaskService,
    SignInService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
