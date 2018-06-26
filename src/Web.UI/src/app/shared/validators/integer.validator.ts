import { ValidatorFn, AbstractControl } from '@angular/forms';

export function integerValidator(min: number = -2147483648, max: number = 2147483647): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } => {
        if (!control.value && control.value !== 0) {
            return null;
        }

        const value = Number(control.value);
        const isInteger = Math.round(value) === value;

        if (!isInteger) {
            return {'notInteger': true};
        }

        if (value < min) {
            return {'tooSmall': true };
        }

        if (value > max) {
            return {'tooLarge': true };
        }

        return null;
    };
}
