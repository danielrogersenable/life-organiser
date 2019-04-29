import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { SignInService } from './features/sign-in/sign-in.service';
import { UserManager } from './features/sign-in/user-manager.service';
import { AuthGuard } from './features/sign-in/auth.guard';
import { AUTH_HTTP_INTERCEPTOR_PROVIDER } from './features/sign-in/auth-http-interceptor-provider';
import { AppDateAdapter } from './shared/date/app-date-adapter';
import { APP_DATE_FORMATS } from './shared/date/app-date-formats';
import { NavComponent } from './shared/nav/nav.component';
import { SignedInGuard } from './features/sign-in/signed-in.guard';
import { ErrorComponent } from './shared/error/error.component';
import { ErrorService } from './shared/error/error.service';
import { ErrorHandlerService } from './shared/error/error-handler.service';
import { SharedModule } from './shared/shared.module';
import { ScheduleComponent } from './features/schedule/schedule/schedule.component';
import { ScheduleListingComponent } from './features/schedule/schedule-listing/schedule-listing.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { TaskModule } from './features/task/task.module';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        NavComponent,
        ErrorComponent,
        ScheduleComponent,
        ScheduleListingComponent,
        DashboardComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        TaskModule
    ],
    providers: [
        SignInService,
        UserManager,
        AuthGuard,
        SignedInGuard,
        ErrorService,
        AUTH_HTTP_INTERCEPTOR_PROVIDER,
        DatePipe,
        { provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
        { provide: ErrorHandler, useClass: ErrorHandlerService }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
