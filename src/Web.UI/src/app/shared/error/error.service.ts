import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }

  public readonly errorMessage = new EventEmitter<string>();

  public addErrorMessage(message: string) {
    this.errorMessage.emit(message);
  }

}
