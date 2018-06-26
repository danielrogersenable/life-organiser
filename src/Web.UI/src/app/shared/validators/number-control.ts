import { FormControl, ValidatorFn } from '@angular/forms';

export class NumberControl extends FormControl {
    constructor(validatorOrOpts?: ValidatorFn | ValidatorFn[]) {
        super(null, validatorOrOpts);
    }

    public value: number;
}
