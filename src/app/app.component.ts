import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogApp';

  constructor(
    private router: Router
  ) {

  }

  routeToBlogs() {
    this.router.navigate(
      ['blog-app']
    );
  }
}
