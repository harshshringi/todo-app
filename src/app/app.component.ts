import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Labels } from './labels.enum';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  currentUrl: string;
  LabelNames;

  constructor(private router: Router) {
    this.router.events
    .subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });

    this.LabelNames = Labels;
  }
}
