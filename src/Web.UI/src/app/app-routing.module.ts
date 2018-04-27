import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'add-task', component: TaskAddComponent },
  { path: 'task/:id', component: TaskComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
