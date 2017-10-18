import { Component } from '@angular/core';
import { TodoService , TODO } from '../service/todo/todo.service';

@Component({
  selector: 'todoInput',
  templateUrl: './todoInput.component.html',
  providers: [TodoService]
})
export class ToDoInputComponent {

  private service: TodoService;

  constructor(private todoService: TodoService) {
    this.service = todoService ;
  }

  addTodo(todoName: string): void {
    this.service.addTODO({
      id: 55,
      name: todoName
    });
  }

}
