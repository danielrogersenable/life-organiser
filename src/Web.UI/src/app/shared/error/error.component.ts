import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorService } from './error.service';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {
    constructor(private _errorService: ErrorService) {}

    public messages: string[] = [];

    ngOnInit() {
        this._errorService.errorMessage
        .pipe(
            takeUntil(this._destroyed$),
            tap(messages => {
                messages.forEach(message => {
                    this.messages.push(message);
                });
            })
        )
        .subscribe();
    }

    private _destroyed$ = new Subject();

    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
    }

    public clear(index: number): void {
        this.messages.splice(index, 1);
    }
}
