import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/blog-app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  allBlogs$ = new Observable<Blog[]>();

  constructor(
    private bs: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.allBlogs$ = this.bs.getAllBlogs() as any;
  }

  // getBlogsForUser() {
  //   this.allBlogs$ = this.bs.getBlogsByUser(1) as any;
  // }

  routeToCreateBlog() {
    this.router.navigate(['blog-app/create-blog']);
  }

  getCommentsForBlog(blogID: number) {
  }

}

export interface Blog {
  blogId: number,
  createdById: number,
  title: string,
  body: string,
  createdOn: Date
}
