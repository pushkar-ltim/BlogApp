import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/blog-app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  allBlogs$ = new Observable()

  constructor(
    private bs: BlogService
  ) {}

  ngOnInit(): void {
    //this.getAllBlogs();
  }

  getAllBlogs() {
    this.allBlogs$ = this.bs.getAllBlogs() as any;
  }

  getCommentsForBlog(blogID: number) {}

}
