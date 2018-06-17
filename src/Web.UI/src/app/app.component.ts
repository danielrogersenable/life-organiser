import { Component, OnInit } from '@angular/core';
import { UserManager } from './features/sign-in/user-manager.service';
import { SignInService } from './features/sign-in/sign-in.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  public signOut(): void {
    console.log('signing out');
    this._userManager.removeUser();
  }

  private setupUserTokenRefresh(): void {
    this._userManager.refreshToken.subscribe(() =>
        this._signInService.refreshToken()
    );
  }

  private redirectOnSignInOut(): void {
    this._userManager.user
        .distinctUntilChanged(
            (x, y) => x.isAuthenticated === y.isAuthenticated
        )
        .skip(1)
        .do(user => {
          console.log('should be hitting here');
            if (user.isAuthenticated) {
              console.log('redirecting because we are signed in');
                this._router.navigateByUrl('/tasks');
                return;
            }

            console.log('redirecting because we are signed out');

            this._router.navigateByUrl('');
        })
        .subscribe();
    }

    private isAuthenticatedSubscription(): void {
      this._userManager.isAuthenticated
      .map(a => this.isAuthenticated = a)
      .subscribe();
    }
}
