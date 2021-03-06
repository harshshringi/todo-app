import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Http, Response } from '@angular/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/todos')
      .pipe(
        map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      , catchError(this.handleError));
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/todos', todo)
      .pipe(
        map(response => {
        return new Todo(response.json());
      })
      , catchError(this.handleError));
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .pipe(
        map(response => {
        return new Todo(response.json());
      })
      , catchError(this.handleError));
  }

  public getTodoByLabel(label: string): Observable<Todo[]> {
    return this.http
      .get(`${API_URL}/todos?label=${label}`)
      .pipe(
        map(response => {
          const todos = response.json();
          return todos.map((todo) => new Todo(todo));
      })
      , catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
