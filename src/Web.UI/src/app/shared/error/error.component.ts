import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private _errorService: ErrorService) { }

  public message: string;

  ngOnInit() {
    this._errorService.errorMessage
    .do(message => {
      this.message = message;
    })
    .subscribe();
  }

  public clear(): void {
    this.message = null;
  }
}
