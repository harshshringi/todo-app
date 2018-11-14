import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private api: ApiService) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  getFilteredByLabel(labelValue: string): Observable<Todo[]> {
    return this.api.getTodoByLabel(labelValue);
  }
}
