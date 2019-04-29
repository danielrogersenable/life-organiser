import { TaskListingDto } from "../task/task-listing.dto";
import { TaskTypeDto } from "../task-type/task-type.dto";

export class RecurringTaskListingDto {
    id: number;
    name: string;
    description: string;
    recurrenceInterval: number;
    taskRecurrenceType: number;
    tasks: TaskListingDto[];
    taskType: TaskTypeDto[];
}