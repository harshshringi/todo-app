import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { Labels } from '../labels.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];
  newTodo: Todo;
  LabelNames;

  constructor(private todoService: TodoService) {
    this.LabelNames = Labels;
  }

  ngOnInit() {
    this.newTodo = new Todo();
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getAllTodos()
    .subscribe((todos) => {
      this.todos = todos;
    });
  }

  createTodo() {
    this.todoService.addTodo(this.newTodo)
    .subscribe((newTodo) => {
      this.newTodo = new Todo();
      this.fetchTodos();
    });
  }

}
