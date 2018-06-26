import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskDto } from '../task.dto';
import { NumberControl } from '../../../shared/validators/number-control';
import { integerValidator } from '../../../shared/validators/integer.validator';

export class TaskForm extends FormGroup {
    constructor() {
        super({
            [TaskForm.idControlKey]: new FormControl(),
            [TaskForm.nameControlKey]: new FormControl(),
            [TaskForm.dateDueControlKey]: new FormControl(),
            [TaskForm.completedControlKey]: new FormControl(),
            [TaskForm.completedDateControlKey]: new FormControl(),
            [TaskForm.scheduledDateControlKey]: new FormControl(),
            [TaskForm.durationInMinutesControlKey]: new NumberControl([
                Validators.required,
                integerValidator(0)
            ]),
            [TaskForm.taskTypeIdControlKey]: new FormControl(),
            [TaskForm.descriptionControlKey]: new FormControl()
        });
    }

    private static readonly idControlKey = 'id';
    private static readonly nameControlKey = 'name';
    private static readonly dateDueControlKey = 'dateDue';
    private static readonly completedControlKey = 'completed';
    private static readonly completedDateControlKey = 'completedDate';
    private static readonly scheduledDateControlKey = 'scheduledDate';
    private static readonly durationInMinutesControlKey = 'durationInMinutes';
    private static readonly taskTypeIdControlKey = 'taskTypeId';
    private static readonly descriptionControlKey = 'description';

    public get name(): FormControl {
        return this.controls[TaskForm.nameControlKey] as FormControl;
    }

    public setValue(task: TaskDto): void {
        super.setValue({
            [TaskForm.nameControlKey]: task.name,
            [TaskForm.dateDueControlKey]: task.dateDue,
            [TaskForm.completedControlKey]: task.completed,
            [TaskForm.idControlKey]: task.id,
            [TaskForm.completedDateControlKey]: task.completedDate,
            [TaskForm.scheduledDateControlKey]: task.scheduledDate,
            [TaskForm.durationInMinutesControlKey]: task.durationInMinutes,
            [TaskForm.taskTypeIdControlKey]: task.taskTypeId,
            [TaskForm.descriptionControlKey]: task.description
        });
    }

    public getValue(): TaskDto {
        return super.getRawValue() as TaskDto;
    }

    public get durationInMinutes(): FormControl {
        return this.controls[TaskForm.durationInMinutesControlKey] as FormControl;
    }
}

export function taskFormFactory(): TaskForm {
    return new TaskForm();
}
