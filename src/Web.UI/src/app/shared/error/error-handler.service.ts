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
            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
                    case 400:
                        this.tryAddErrors(error.error);
                        break;

                    default:
                        this._errorService.addErrorMessage(
                            'Something went wrong.'
                        );
                }
            }
        } catch (e) {}
    }

    private tryAddErrors(errorBody: any): void {
        try {
            const messages: string[] = [];

            if (typeof errorBody === 'string') {
                messages.push(errorBody);
            } else if (Array.isArray(errorBody)) {
                errorBody.forEach(message => {
                    if (typeof message === 'string') {
                        messages.push(message);
                    }
                });
            }

            if (messages.length > 0) {
                this._errorService.addErrorMessages(messages);
            }
        } catch (e) {}
    }
}
