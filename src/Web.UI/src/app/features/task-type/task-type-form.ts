import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskTypeDto } from './task-type.dto';

export class TaskTypeForm extends FormGroup {
    constructor() {
        super({
            [TaskTypeForm.idControlKey]: new FormControl(),
            [TaskTypeForm.nameControlKey]: new FormControl(),
            [TaskTypeForm.colorControlKey]: new FormControl()
        });
}

private static readonly idControlKey = 'id';
private static readonly nameControlKey = 'name';
private static readonly colorControlKey = 'color';

public setValue(task: TaskTypeDto): void {
    super.setValue(
        {
            [TaskTypeForm.nameControlKey]: task.name,
            [TaskTypeForm.idControlKey]: task.id,
            [TaskTypeForm.colorControlKey]: task.color
        });
}

public getValue(): TaskTypeDto {
    return super.getRawValue() as TaskTypeDto;
}
}
