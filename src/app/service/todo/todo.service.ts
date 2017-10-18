import { Injectable } from '@angular/core';


export class TODO {
  id: number;
  name: string;
}

export const TODOs: TODO[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable()
export class TodoService {

  private todos: TODO[] ;

  constructor() {
    this.todos = TODOs ;
  }

  getTODOs(): TODO[] {
    return this.todos;
  }

  addTODO(todo: TODO): void {
    this.todos.push(todo);
  }

}
