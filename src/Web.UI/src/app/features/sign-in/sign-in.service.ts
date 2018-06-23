import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SignInDto } from './sign-in.dto';
import { Observable } from 'rxjs/Observable';
import { map, tap, skipWhile, retryWhen, delay, takeUntil } from 'rxjs/operators';
import { AppUser } from './app-user';
import { UserManager } from './user-manager.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const authRootUri = `${environment.apiRootUri}/auth`;

@Injectable()
export class SignInService {

  constructor(private http: HttpClient, private _userManager: UserManager) { }

  private signInUrl = `${authRootUri}/sign-in`;

  public signIn(signInDto: SignInDto): Observable<boolean> {
    return this.http.post<AppUser>(this.signInUrl, signInDto, httpOptions)
      .pipe(
        tap(user =>  this._userManager.setUser(user)),
        map(() => true)
      );
  }

  public refreshToken(): void {
    const userSignedOut$ = this._userManager.user
        .pipe(
            skipWhile(user => user && user.isAuthenticated)
        );

    this.http
        .post<AppUser>(`${authRootUri}/refresh-token`, null)
        .pipe(
            retryWhen(errors => errors
                .pipe(
                    delay(5000),
                    takeUntil(userSignedOut$))
                ),
            tap(user => this._userManager.setUser(user))
        )
        .subscribe();
}

}
