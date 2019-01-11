import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskAddComponent } from './features/task/task-add/task-add.component';
import { TaskListComponent } from './features/task/task-list/task-list.component';
import { TaskEditComponent } from './features/task/task-edit/task-edit.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { AuthGuard } from './features/sign-in/auth.guard';
import { SignedInGuard } from './features/sign-in/signed-in.guard';
import { TaskTypeListingComponent } from './features/task-type/task-type-listing/task-type-listing.component';
import { ScheduleComponent } from './features/schedule/schedule/schedule.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
    {
        path: 'sign-in',
        canActivate: [SignedInGuard],
        component: SignInComponent
    },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: 'tasks', component: TaskListComponent },
            { path: 'add-task', component: TaskAddComponent },
            { path: 'task/:id', component: TaskEditComponent },
            { path: 'task-types', component: TaskTypeListingComponent },
            { path: 'schedule', component: ScheduleComponent },
            { path: 'dashboard', component: DashboardComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
