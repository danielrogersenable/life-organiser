import { Component, OnInit } from '@angular/core';
import { UserManager } from './features/sign-in/user-manager.service';
import { SignInService } from './features/sign-in/sign-in.service';

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

  private setupUserTokenRefresh(): void {
    this._userManager.refreshToken.subscribe(() =>
        this._signInService.refreshToken()
    );
}
}
