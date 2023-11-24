import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogAppRoutingModule } from './blog-app-routing.module';
import { BlogAppComponent } from './blog-app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogListComponent } from './components/home/blog-list/blog-list/blog-list.component';
import { BlogCardComponent } from './components/home/blog-card/blog-card.component';
import { CreateBlogComponent } from './components/home/create-blog/create-blog.component';
import { BlogService } from './services/blog.service';
import { HttpService } from '../services/http/http.service';

import { ReactiveFormsModule } from '@angular/forms';
import { RecentlyAddedComponent } from './components/home/recently-added/recently-added.component';
import { YourBlogsComponent } from './components/home/your-blogs/your-blogs.component';
import { ViewBlogComponent } from './components/home/view-blog/view-blog/view-blog.component';



@NgModule({
  declarations: [
    BlogAppComponent,
    NavbarComponent,
    HomeComponent,
    BlogListComponent,
    BlogCardComponent,
    CreateBlogComponent,
    RecentlyAddedComponent,
    YourBlogsComponent,
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    BlogAppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    BlogService
  ]
})
export class BlogAppModule { }
