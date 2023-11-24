import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Blog } from '../blog-list/blog-list/blog-list.component';
import { Route, Router } from '@angular/router';
import { BlogService } from 'src/app/blog-app/services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit, OnDestroy {

  @Input() blog: Blog | null = null;

  constructor(
    private router: Router,
    private bs: BlogService
  ) {
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  routeToViewBlog(id: any) {
    this.router.navigate(['blog-app/view-blog/' + id])
  }

}
