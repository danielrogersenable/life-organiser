import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserManager } from './features/sign-in/user-manager.service';
import { SignInService } from './features/sign-in/sign-in.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { distinctUntilChanged, skip, tap, map, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(
        private _userManager: UserManager,
        private _signInService: SignInService,
        private _router: Router
    ) { }

    title = 'Life Organiser';
    public isAuthenticated: boolean;

    public ngOnInit(): void {
        this.setupUserTokenRefresh();
        this.redirectOnSignInOut();
        this.isAuthenticatedSubscription();
    }

    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    public signOut(): void {
        this._userManager.removeUser();
    }

    private setupUserTokenRefresh(): void {
        this._userManager.refreshToken
        .pipe(
            takeUntil(this._destroyed$),
            tap(() => {
                this._signInService.refreshToken()
            })
        )
        .subscribe();
    }

    private redirectOnSignInOut(): void {
        this._userManager.user
            .pipe(
                takeUntil(this._destroyed$),
                distinctUntilChanged(
                    (x, y) => x.isAuthenticated === y.isAuthenticated
                ),
                skip(1),
                tap(user => {
                    if (user.isAuthenticated) {
                        this._router.navigateByUrl('/tasks');
                        return;
                    }

                    this._router.navigateByUrl('');
                })
            )
            .subscribe();
    }

    private isAuthenticatedSubscription(): void {
        this._userManager.isAuthenticated
            .pipe(
                takeUntil(this._destroyed$),
                map(a => (this.isAuthenticated = a))
            )
            .subscribe();
    }
}
