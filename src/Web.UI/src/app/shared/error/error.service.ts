import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ErrorService {
    constructor() {}

    public readonly errorMessage = new EventEmitter<string[]>();

    public addErrorMessage(message: string) {
        const messages: string[] = [message];
        this.errorMessage.next(messages);
    }

    public addErrorMessages(messages: string[]) {
        this.errorMessage.next(messages);
    }
}
