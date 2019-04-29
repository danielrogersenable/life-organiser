import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskTypeListingComponent } from '../task-type/task-type-listing/task-type-listing.component';
import { TaskTypeDetailComponent } from '../task-type/task-type-detail/task-type-detail.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskDeleteModalComponent } from './task-delete-modal/task-delete-modal.component';
import { TaskService } from './task.service';
import { TaskTypeService } from '../task-type/task-type.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TaskListComponent,
    TaskAddComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskTypeListingComponent,
    TaskTypeDetailComponent,
    TaskViewComponent,
    TaskDeleteModalComponent,
  ],
  providers: [
    TaskService,
    TaskTypeService
  ],
  entryComponents: [
    TaskDeleteModalComponent
]
})
export class TaskModule { }
