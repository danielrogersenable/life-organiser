export class TaskDto {
    id: number;
    name: string;
    description: string;
    dateDue: string;
    completed: boolean;
    completedDate: string;
    scheduledDate: string;
    durationInMinutes: number;
    taskTypeId: number;
    taskType: string;
}
