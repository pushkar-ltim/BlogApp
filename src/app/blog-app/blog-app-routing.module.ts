import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAppComponent } from './blog-app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateBlogComponent } from './components/home/create-blog/create-blog.component';
import { BlogListComponent } from './components/home/blog-list/blog-list/blog-list.component';
import { ViewBlogComponent } from './components/home/view-blog/view-blog/view-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogAppComponent,
    children: [
      {
        path: 'create-blog',
        component: CreateBlogComponent
      },
      {
        path: 'view-blog/:id',
        component: ViewBlogComponent
      },
      {
        path: '**',
        component: BlogListComponent
      }
    ]
  },
  {
    path: '**',
    component: BlogAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogAppRoutingModule { }
