import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { HttpService } from './services/http/http.service';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogHttpInterceptor } from './services/http/blog-http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpService,
    AuthService,
    { 
      provide: HTTP_INTERCEPTORS, useClass: BlogHttpInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
