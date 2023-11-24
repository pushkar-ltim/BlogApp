import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/blog-app/services/blog.service';
import { Blog } from '../blog-list/blog-list/blog-list.component';
import { ReducedBlog } from 'src/app/blog-app/models/blog-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit, OnDestroy {
  date = new Date()

  form = new FormGroup({
    // blogID: new FormControl(0),
    // createdOn: new FormControl(),
    createdByID: new FormControl(1),
    title: new FormControl(''),
    body: new FormControl(''),
  })

  constructor(
    private bs: BlogService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  routeToBlogList() {
    this.router.navigate(['/blog-app']);
  }

  onSubmit() {
    let blog: ReducedBlog =  {
      title: this.form.value.title || '',
      createdByID: this.form.value.createdByID || 0,
      body: this.form.value.body || '',
    };
    this.bs.postBlog(blog)?.subscribe();
  }
 
}


