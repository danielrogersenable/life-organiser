import { Component, OnInit } from '@angular/core';
import { SignInForm, signInFormFactory } from './sign-in-form';
import { SignInService } from './sign-in.service';
import { SignInDto } from './sign-in.dto';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    providers: [{ provide: SignInForm, useFactory: signInFormFactory }]
})
export class SignInComponent implements OnInit {
    constructor(
        public form: SignInForm,
        private signInService: SignInService
    ) {}

    public signInDto: SignInDto;

    ngOnInit() {}

    signIn() {
        if (this.form.invalid) {
            return;
        }

        this.signInDto = this.form.getValue();

        this.signInService
            .signIn(this.signInDto)
            .pipe(
                first()
            )
            .subscribe();
    }
}
