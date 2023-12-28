import { Injectable } from '@angular/core';
import { HttpService, HttpVerbs } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment.development';
import { BlogAppModule } from '../blog-app.module';
import { Observable } from 'rxjs';
import { Blog } from '../components/home/blog-list/blog-list/blog-list.component';
import { ReducedBlog } from '../models/blog-model';

@Injectable()
export class BlogService {

  controllerUrl = 'blog/';
  commentControllerUrl = 'comments/'

  constructor(
    private http: HttpService
  ) { }

  getAllBlogs() {
    let url = this.controllerUrl;
    return this.http.request(HttpVerbs.GET, url);
  }

  getBlogsByUser(id: number) {
    let url = this.controllerUrl + 'GetBlogsByUser/' + id;
    return this.http.request(HttpVerbs.GET, url);
  }

  getBlogWithComments(id: number) {
    let url = this.controllerUrl + 'GetBlogWithComments/' + id;
    return this.http.request(HttpVerbs.GET, url);
  }

  getCommentsForBlogWithUser(id: number) {
    let url = this.commentControllerUrl + 'GetCommentsForBlogWithUser/' + id;
    return this.http.request(HttpVerbs.GET, url);
  }

  getCommentsForBlog(id: number) {
    let url = this.controllerUrl + 'GetCommentsForBlog/' + id;
    return this.http.request(HttpVerbs.GET, url);
  }

  postComment(comment: any) {
    let url = this.commentControllerUrl;
    return this.http.request(HttpVerbs.POST, url, comment)
  }

  getRecentBlogsByUser(userID: number) {
    let url = this.controllerUrl + 'getRecentBlogsByUser/' + userID;
    return this.http.request(HttpVerbs.GET, url) as any;
  }

  postBlog(blog: ReducedBlog) {
    let url = this.controllerUrl;
    return this.http.request(HttpVerbs.POST, url, blog) as any;
  }

  updateBlog() {

  }

}
