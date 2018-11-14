import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private todo: Todo = new Todo();
  private id;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.fetchDetails();
    } );
  }

  fetchDetails() {
    this.todoService.getTodoById(this.id)
    .subscribe((todo) => {
      this.todo = todo;
    },
    error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
