import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, name: 'Hoover', dueDate: '01/02/2018', completed: false },
      { id: 12, name: 'Dust', dueDate: '02/02/2018', completed: false },
      { id: 13, name: 'Wash up', dueDate: '03/02/2018', completed: false },
      { id: 14, name: 'Wrap Christmas presents', dueDate: '12/25/2017', completed: true },
      { id: 15, name: 'Do washing', dueDate: '05/04/2018', completed: false },
      { id: 16, name: 'Retrieve data from API', dueDate: '02/26/2018', completed: false }
    ];
    return { tasks };
  }
}