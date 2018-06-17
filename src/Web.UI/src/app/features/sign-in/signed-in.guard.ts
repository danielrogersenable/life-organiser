import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserManager } from './user-manager.service';

@Injectable()
export class SignedInGuard implements CanActivate {
    constructor(
        private _userManager: UserManager,
        private _router: Router
    ) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this._userManager.user
            .first()
            .do(user => {
                if (user.isAuthenticated) {
                    this._router.navigateByUrl('');
                }
            })
            .map(user => !user.isAuthenticated);
    }
}
