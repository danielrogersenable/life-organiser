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

  public messages: string[] = [];

  ngOnInit() {
    this._errorService.errorMessage
    .do(messages => {
      (messages).forEach(message => {
        this.messages.push(message);
      });
    })
    .subscribe();
  }

  public clear(index: number): void {
    this.messages.splice(index, 1);
  }
}
