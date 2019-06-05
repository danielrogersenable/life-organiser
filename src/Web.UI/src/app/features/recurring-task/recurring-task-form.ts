import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NumberControl } from '../../shared/validators/number-control';
import { integerValidator } from '../../shared/validators/integer.validator';
import { RecurringTaskListingDto } from './recurring-task.dto';

export class RecurringTaskForm extends FormGroup {
    constructor() {
        super({
            [RecurringTaskForm.idControlKey]: new FormControl(),
            [RecurringTaskForm.nameControlKey]: new FormControl(),
            [RecurringTaskForm.descriptionControlKey]: new FormControl(),
            [RecurringTaskForm.recurrenceIntervalKey]: new NumberControl([
                Validators.required,
                integerValidator(0)
            ]),
            [RecurringTaskForm.taskRecurrenceTypeKey]: new FormControl(),
            [RecurringTaskForm.taskTypeIdControlKey]: new FormControl(),
        });
    }

    private static readonly idControlKey = 'id';
    private static readonly nameControlKey = 'name';
    private static readonly descriptionControlKey = 'description';
    private static readonly recurrenceIntervalKey = 'recurrenceInterval';
    private static readonly taskRecurrenceTypeKey = 'taskRecurrenceType'
    private static readonly taskTypeIdControlKey = 'taskTypeId';

    public get name(): FormControl {
        return this.controls[RecurringTaskForm.nameControlKey] as FormControl;
    }

    public setValue(recurringTask: RecurringTaskListingDto): void {
        super.setValue({
            [RecurringTaskForm.nameControlKey]: recurringTask.name,
            [RecurringTaskForm.descriptionControlKey]: recurringTask.description,
            [RecurringTaskForm.recurrenceIntervalKey]: recurringTask.recurrenceInterval,
            [RecurringTaskForm.taskRecurrenceTypeKey]: recurringTask.taskRecurrenceType,
            [RecurringTaskForm.taskTypeIdControlKey]: recurringTask.taskTypeId
        });
    }

    public getValue(): RecurringTaskListingDto {
        return super.getRawValue() as RecurringTaskListingDto;
    }
}

export function taskFormFactory(): RecurringTaskForm {
    return new RecurringTaskForm();
}
