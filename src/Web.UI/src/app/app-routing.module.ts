import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructionsComponent } from './instructions/instructions.component';
import { TaskAddComponent } from './features/task/task-add/task-add.component';
import { TaskListComponent } from './features/task/task-list/task-list.component';
import { TaskEditComponent } from './features/task/task-edit/task-edit.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { AuthGuard } from './features/sign-in/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tasks'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'instructions', canActivate: [AuthGuard], component: InstructionsComponent },
  { path: 'add-task', component: TaskAddComponent },
  { path: 'task/:id', component: TaskEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
