import { Component, OnInit } from '@angular/core';
import { UserManager } from './features/sign-in/user-manager.service';
import { SignInService } from './features/sign-in/sign-in.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _userManager: UserManager,
    private _signInService: SignInService
  ) { }

  title = 'Life Organiser';

  public ngOnInit(): void {
    this.setupUserTokenRefresh();
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
}
