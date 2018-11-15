import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../todo.model';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  todos: Todo[] = [];
  private label;
  private labelSubscription: Subscription;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
    this.route.params.subscribe(params => {
      this.label = params.label;
      this.fetchItems();
     });
  }

  fetchItems() {
    this.todoService.getFilteredByLabel(this.label)
      .subscribe((todos) => {
        this.todos = todos;
      });
  }

  ngOnInit() {
  }
}
