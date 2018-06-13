import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskDto } from '../task.dto';

export class TaskForm extends FormGroup {
    constructor() {
        super({
            [TaskForm.idControlKey]: new FormControl(),
            [TaskForm.nameControlKey]: new FormControl(),
            [TaskForm.dateDueControlKey]: new FormControl(),
            [TaskForm.completedControlKey]: new FormControl(),
            [TaskForm.completedDateControlKey]: new FormControl(),
            [TaskForm.scheduledDateControlKey]: new FormControl(),
            [TaskForm.durationInMinutesControlKey]: new FormControl(),
        });
}

private static readonly idControlKey = 'id';
private static readonly nameControlKey = 'name';
private static readonly dateDueControlKey = 'dateDue';
private static readonly completedControlKey = 'completed';
private static readonly completedDateControlKey = 'completedDate';
private static readonly scheduledDateControlKey = 'scheduledDate';
private static readonly durationInMinutesControlKey = 'durationInMinutes';

public get name(): FormControl {
    return this.controls[TaskForm.nameControlKey] as FormControl;
}

public setValue(task: TaskDto): void {
    super.setValue(
        {
            [TaskForm.nameControlKey]: task.name,
            [TaskForm.dateDueControlKey]: task.dateDue,
            [TaskForm.completedControlKey]: task.completed,
            [TaskForm.idControlKey]: task.id,
            [TaskForm.completedDateControlKey]: task.completedDate,
            [TaskForm.scheduledDateControlKey]: task.scheduledDate,
            [TaskForm.durationInMinutesControlKey]: task.durationInMinutes,
        });
}

public getValue(): TaskDto {
    return super.getRawValue() as TaskDto;
}
}
