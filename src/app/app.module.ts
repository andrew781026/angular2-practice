import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// use FormsModule for [(ngModel)]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoInputComponent } from './todoInput/todoInput.component';
import { ToDoListComponent } from './todoList/todoList.component';

@NgModule({
  declarations: [
    AppComponent , ToDoInputComponent , ToDoListComponent
  ],
  imports: [
    BrowserModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
