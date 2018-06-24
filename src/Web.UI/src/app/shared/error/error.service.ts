import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorService {
    constructor() {}

    public readonly errorMessage = new EventEmitter<string[]>();

    public addErrorMessage(message: string) {
        const messages: string[] = [message];
        this.errorMessage.emit(messages);
    }

    public addErrorMessages(messages: string[]) {
        this.errorMessage.emit(messages);
    }
}
