import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Blog } from '../blog-list/blog-list/blog-list.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit, OnDestroy {

  @Input() blog: Blog | null = null;

  constructor() {
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
