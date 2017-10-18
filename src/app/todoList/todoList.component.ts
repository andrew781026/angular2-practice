import { Component } from '@angular/core';
import { TodoService, TODO } from '../service/todo/todo.service';


@Component({
  selector: 'todoList',
  template: `
  <ul>
    <li *ngFor="let todo of todos" >
      {{ todo.name }}
    </li>
  </ul>
  `,
  providers: [TodoService]
})
export class ToDoListComponent {

  todos: TODO[] ;

  constructor(private todoService: TodoService) {
    this.todos = todoService.getTODOs() ;
  }


  list = {
    todos : [
      '打掃家裡' , '倒垃圾' , '打掃客廳'
    ]
  } ;

  title = 'app';
}

