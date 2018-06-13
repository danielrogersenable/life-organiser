import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignInDto } from './sign-in.dto';

export class SignInForm extends FormGroup {
    constructor() {
        super({
            [SignInForm.usernameControlKey]: new FormControl(),
            [SignInForm.passwordControlKey]: new FormControl()
        });
}

private static readonly usernameControlKey = 'username';
private static readonly passwordControlKey = 'password';

public setValue(signInDto: SignInDto): void {
    super.setValue(
        {
            [SignInForm.usernameControlKey]: signInDto.username,
            [SignInForm.passwordControlKey]: signInDto.password
        });
}

public getValue(): SignInDto {
    return super.getRawValue() as SignInDto;
}
}
