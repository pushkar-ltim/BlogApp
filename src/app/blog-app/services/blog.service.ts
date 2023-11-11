import { Injectable } from '@angular/core';
import { HttpService, HttpVerbs } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment.development';
import { BlogAppModule } from '../blog-app.module';
import { Observable } from 'rxjs';
import { Blog } from '../components/home/blog-list/blog-list/blog-list.component';

@Injectable()
export class BlogService {

  controllerUrl = 'blog/';

  constructor(
    private http: HttpService
  ) { }

  getAllBlogs() {
    let url = this.controllerUrl;
    return this.http.request(HttpVerbs.GET, url);
  }

  getBlogsForUser(id: number) {
    let url = this.controllerUrl + 'GetBlogsForUser/' + id;
    return this.http.request(HttpVerbs.GET, url);
  }

  getBlogWithComments() {
  
  }

  addBlog() {

  }

  updateBlog() {

  }

  updateComment() {

  }

}
