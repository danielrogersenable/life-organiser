import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { UserManager } from './user-manager.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _userManager: UserManager, private _router: Router) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this._userManager.isAuthenticated
            .pipe(
                first(),
                tap(isAuthenticated => {
                    if (!isAuthenticated) {
                        this._router.navigateByUrl('/sign-in');
                    } else {
                        return true;
                    }
                })
            );
    }
}
