import { TestBed } from '@angular/core/testing';

import { RecurringTaskService } from './recurring-task.service';

describe('RecurringTaskServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecurringTaskService = TestBed.get(RecurringTaskService);
    expect(service).toBeTruthy();
  });
});
