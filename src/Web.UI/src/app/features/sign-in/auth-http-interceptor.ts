import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';

import { UserManager } from './user-manager.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private readonly _userManager: UserManager) { }

    public intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return this._userManager.user
            .pipe(
                first(),
                mergeMap((user) => {
                    if (user && user.isAuthenticated) {
                        request = request.clone({
                            setHeaders: {
                                Authorization: `${user.tokenType} ${user.securityToken}`
                            }
                        });
                    }

                    return next.handle(request);
                })
            );
    }
}
