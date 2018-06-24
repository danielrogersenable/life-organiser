import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructionsComponent } from './instructions/instructions.component';
import { TaskAddComponent } from './features/task/task-add/task-add.component';
import { TaskListComponent } from './features/task/task-list/task-list.component';
import { TaskEditComponent } from './features/task/task-edit/task-edit.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { AuthGuard } from './features/sign-in/auth.guard';
import { SignedInGuard } from './features/sign-in/signed-in.guard';
import { TaskTypeListingComponent } from './features/task-type/task-type-listing/task-type-listing.component';

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
            { path: 'instructions', component: InstructionsComponent },
            { path: 'add-task', component: TaskAddComponent },
            { path: 'task/:id', component: TaskEditComponent },
            { path: 'task-types', component: TaskTypeListingComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
