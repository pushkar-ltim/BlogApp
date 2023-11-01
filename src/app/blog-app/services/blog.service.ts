import { Injectable } from '@angular/core';
import { HttpService, HttpVerbs } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment.development';
import { BlogAppModule } from '../blog-app.module';

@Injectable()
export class BlogService {

  url = '/posts';

  constructor(
    private http: HttpService
  ) { }

  getAllBlogs() {
    return this.http.request(HttpVerbs.GET, this.url);
  }

}
