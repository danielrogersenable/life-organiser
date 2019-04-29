import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignInForm, signInFormFactory } from './sign-in-form';
import { SignInService } from './sign-in.service';
import { SignInDto } from './sign-in.dto';
import { first, takeUntil } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    providers: [{ provide: SignInForm, useFactory: signInFormFactory }]
})
export class SignInComponent implements OnInit, OnDestroy {
    constructor(
        public form: SignInForm,
        private signInService: SignInService
    ) {}

    public signInDto: SignInDto;

    public isSigningIn: boolean = false;

    ngOnInit() {}

    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    signIn() {
        if (this.form.invalid) {
            return;
        }

        this.isSigningIn = true;

        this.signInDto = this.form.getValue();

        this.signInService
            .signIn(this.signInDto)
            .pipe(
                takeUntil(this._destroyed$),
                first(),
                finalize(() => {
                    this.isSigningIn = false;
                })
            )
            .subscribe();
    }
}
