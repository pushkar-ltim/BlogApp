import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BlogService } from 'src/app/blog-app/services/blog.service';

@Component({
  selector: 'app-your-blogs',
  templateUrl: './your-blogs.component.html',
  styleUrls: ['./your-blogs.component.scss']
})
export class YourBlogsComponent implements OnInit {

  recentBlogsByUser$: any;

  constructor(
    private bs: BlogService,
    private router: Router
  ) {}
  
  ngOnInit() {
    this.recentBlogsByUser$ = this.bs.getRecentBlogsByUser(1);
  }

}
