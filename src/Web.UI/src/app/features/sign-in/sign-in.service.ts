import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SignInDto } from './sign-in.dto';
import { Observable, Subject } from 'rxjs';
import {
    map,
    tap,
    skipWhile,
    retryWhen,
    delay,
    takeUntil
} from 'rxjs/operators';
import { AppUser } from './app-user';
import { UserManager } from './user-manager.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const authRootUri = `${environment.apiRootUri}/auth`;

@Injectable()
export class SignInService implements OnDestroy {
    constructor(private http: HttpClient, private _userManager: UserManager) {}

    private signInUrl = `${authRootUri}/sign-in`;

    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    public signIn(signInDto: SignInDto): Observable<boolean> {
        return this.http
            .post<AppUser>(this.signInUrl, signInDto, httpOptions)
            .pipe(
                tap(user => this._userManager.setUser(user)),
                map(() => true)
            );
    }

    public refreshToken(): void {
        const userSignedOut$ = this._userManager.user.pipe(
            skipWhile(user => user && user.isAuthenticated)
        );

        this.http
            .post<AppUser>(`${authRootUri}/refresh-token`, null)
            .pipe(
                takeUntil(this._destroyed$),
                retryWhen(errors =>
                    errors.pipe(
                        delay(5000),
                        takeUntil(userSignedOut$)
                    )
                ),
                tap(user => this._userManager.setUser(user))
            )
            .subscribe();
    }
}
