import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogAppRoutingModule } from './blog-app-routing.module';
import { BlogAppComponent } from './blog-app.component';
import { HttpService } from '../services/http/http.service';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogAppComponent,
  ],
  imports: [
    CommonModule,
    BlogAppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
  ]
})
export class BlogAppModule { }
