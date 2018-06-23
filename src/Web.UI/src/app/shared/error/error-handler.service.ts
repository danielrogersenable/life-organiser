import { Injectable, ErrorHandler } from '@angular/core';
import { ErrorService } from './error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorHandlerService extends ErrorHandler {

  constructor(private _errorService: ErrorService) {
    super();
  }

  public handleError(error: any): void {
    this.raiseNotifications(error);
    super.handleError(error);
  }

  private raiseNotifications(error: any): void {
    try {

      if (error instanceof HttpErrorResponse){
        switch (error.status) {
          case 400:
          console.log(error);
          this._errorService.addErrorMessage(error.error);
          break;

          default:
          this._errorService.addErrorMessage('Something went wrong.');
        }
      }

    } catch (e) {}
  }

}
