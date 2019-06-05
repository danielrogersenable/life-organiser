import { TaskListingDto } from "../task/task-listing.dto";
import { TaskTypeDto } from "../task-type/task-type.dto";

export enum RecurrenceType {
    Day,
    Week,
    Month,
    Year
}

export class RecurringTaskListingDto {
    id: number;
    name: string;
    description: string;
    recurrenceInterval: number;
    taskRecurrenceType: RecurrenceType;
    tasks: TaskListingDto[];
    taskType: TaskTypeDto;
    taskTypeId: number;
}