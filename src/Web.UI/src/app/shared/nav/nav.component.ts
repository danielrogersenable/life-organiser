import { Component, OnInit } from '@angular/core';
import { UserManager } from '../../features/sign-in/user-manager.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private _userManager: UserManager,
  private _router: Router) { }

  ngOnInit() {
  }

  public listClick(): void {
    this._router.navigateByUrl('/tasks');
  }

  public addClick(): void {
    this._router.navigateByUrl('/add-task');
  }

  public taskTypeClick(): void {
    this._router.navigateByUrl('task-types');
  }

  public signOut(): void {
    console.log('signing out');
    this._userManager.removeUser();
  }
}
