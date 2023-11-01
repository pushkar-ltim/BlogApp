import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogAppRoutingModule } from './blog-app-routing.module';
import { BlogAppComponent } from './blog-app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BlogListComponent } from './components/home/blog-list/blog-list/blog-list.component';
import { BlogCardComponent } from './components/home/blog-card/blog-card.component';
import { CreateBlogComponent } from './components/home/create-blog/create-blog.component';
import { BlogService } from './services/blog.service';
import { HttpService } from '../services/http/http.service';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogAppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BlogListComponent,
    BlogCardComponent,
    CreateBlogComponent
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
