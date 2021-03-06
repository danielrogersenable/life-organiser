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
    constructor(private _userManager: UserManager, private _router: Router) {}

    ngOnInit() {
    }

    public dashboardClick(): void {
        this._router.navigateByUrl('dashboard');
    }

    public listClick(): void {
        this._router.navigateByUrl('/tasks');
    }

    public addClick(): void {
        this._router.navigateByUrl('/add-task');
    }

    public scheduleClick(): void {
        this._router.navigateByUrl('/schedule');
    }

    public taskTypeClick(): void {
        this._router.navigateByUrl('task-types');
    }

    public recurringTasksClick(): void {
        this._router.navigateByUrl('recurring-tasks');
    }

    public signOut(): void {
        this._userManager.removeUser();
    }
}
