import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BlogService } from 'src/app/blog-app/services/blog.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-your-blogs',
  templateUrl: './your-blogs.component.html',
  styleUrls: ['./your-blogs.component.scss']
})
export class YourBlogsComponent implements OnInit {

  recentBlogsByUser$: any;

  constructor(
    private bs: BlogService,
    private router: Router,
    private authService: AuthService
  ) {

    this.authService.currentUser$.asObservable().subscribe(res => {
      console.log(res, 'inside your blogs');

      let userID = + (res?.userId || "");

      if (!userID) 
        return;

      this.recentBlogsByUser$ = this.bs.getRecentBlogsByUser(userID);

    })
  }

  ngOnInit() {

  }

}
