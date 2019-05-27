import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecurringTaskViewComponent } from './recurring-task-view/recurring-task-view.component';
import { RecurringTaskListComponent } from './recurring-task-list/recurring-task-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RecurringTaskViewComponent, RecurringTaskListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RecurringTaskModule { }
