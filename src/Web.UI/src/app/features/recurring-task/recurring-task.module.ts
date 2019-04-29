import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecurringTaskViewComponent } from './recurring-task-view/recurring-task-view.component';
import { RecurringTaskListComponent } from './recurring-task-list/recurring-task-list.component';

@NgModule({
  declarations: [RecurringTaskViewComponent, RecurringTaskListComponent],
  imports: [
    CommonModule
  ]
})
export class RecurringTaskModule { }
