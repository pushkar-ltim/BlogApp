import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/blog-app/services/blog.service';
import { Blog } from '../../blog-list/blog-list/blog-list.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit{

  blog: Blog | any = null;
  comments: any;
  blog$: any;

  form = new FormGroup({
    body: new FormControl(),
    // commentID: new FormControl(),
    blogID: new FormControl(),
    // commentedOnDate: new FormControl(),
    // commentedByUser: new FormControl()
  })

  constructor(
    private bs: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let blogID = this.route.snapshot.params['id'];
    //this.blog$ = this.bs.getBlogWithComments(blogID);
    this.bs.getBlogWithComments(blogID)?.subscribe(
      (data : any) => {
        this.blog = data;
      }
    )

    this.bs.getCommentsForBlogWithUser(blogID)?.subscribe(
      (data : any) => {
        this.comments = data
      }
    );
  }

  onSubmit() {

    let blogID = this.route.snapshot.paramMap.get('id');
    debugger;
    let comment =  {
      blogID: this.form.value.blogID || blogID,
      body: this.form.value.body || '',
    };
    this.bs.postComment(comment)?.subscribe();
    this.router.navigate([`blog-app/view-blog/${blogID}`])
  }

  routeToBlogList() {
    this.router.navigate(['blog-app/']);
  }


}