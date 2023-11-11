import { Component, OnInit } from '@angular/core';
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
    private bs: BlogService
  ) {}

  ngOnInit(): void {
    this.getBlogsForUser();
  }

  getAllBlogs() {
    this.allBlogs$ = this.bs.getAllBlogs() as any;
  }

  getBlogsForUser() {
    this.allBlogs$ = this.bs.getBlogsForUser(1) as any;
  }

  getCommentsForBlog(blogID: number) {}

}

export interface Blog {
  blogId: number,
  createdById: number,
  title: string,
  body: string,
  createdOn: Date
}
