import { TaskTypeDto } from './task-type.dto';

export class TaskDto {
  id: number;
  name: string;
  dateDue: string;
  completed: boolean;
  completedDate: string;
  scheduledDate: string;
  durationInMinutes: number;
  taskTypeId: number;
}
