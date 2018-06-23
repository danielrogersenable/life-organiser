import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule
} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InstructionsComponent } from './instructions/instructions.component';
import { TaskAddComponent } from './features/task/task-add/task-add.component';
import { TaskDetailComponent } from './features/task/task-detail/task-detail.component';
import { TaskListComponent } from './features/task/task-list/task-list.component';
import { TaskService } from './features/task/task.service';
import { TaskEditComponent } from './features/task/task-edit/task-edit.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignInService } from './features/sign-in/sign-in.service';
import { UserManager } from './features/sign-in/user-manager.service';
import { AuthGuard } from './features/sign-in/auth.guard';
import { AUTH_HTTP_INTERCEPTOR_PROVIDER } from './features/sign-in/auth-http-interceptor-provider';
import { AppDateAdapter } from './shared/date/app-date-adapter';
import { APP_DATE_FORMATS } from './shared/date/app-date-formats';
import { NavComponent } from './shared/nav/nav.component';
import { SignedInGuard } from './features/sign-in/signed-in.guard';
import { TaskTypeListingComponent } from './features/task-type/task-type-listing/task-type-listing.component';
import { TaskTypeDetailComponent } from './features/task-type/task-type-detail/task-type-detail.component';
import { TaskTypeService } from './features/task-type/task-type.service';
import { MccColorPickerModule } from 'material-community-components';
import { ErrorComponent } from './shared/error/error.component';
import { ErrorService } from './shared/error/error.service';
import { ErrorHandlerService } from './shared/error/error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    InstructionsComponent,
    TaskAddComponent,
    TaskDetailComponent,
    TaskEditComponent,
    SignInComponent,
    NavComponent,
    TaskTypeListingComponent,
    TaskTypeDetailComponent,
    ErrorComponent
  ],
  imports: [
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
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MccColorPickerModule.forRoot({
      empty_color: 'transparent'
    })
  ],
  providers: [
    TaskService,
    TaskTypeService,
    SignInService,
    UserManager,
    AuthGuard,
    SignedInGuard,
    ErrorService,
    AUTH_HTTP_INTERCEPTOR_PROVIDER,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: ErrorHandler, useClass: ErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
