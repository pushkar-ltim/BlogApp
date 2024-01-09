import { Injectable } from '@angular/core';
import { HttpService, HttpVerbs } from '../http/http.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  UserControllerUrl = 'User'

  isLoggedIn$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginCredentials: AuthReqBody = {
    userName: '',
    password: ''
  }
  currentUser$ = new BehaviorSubject<User | null>(null); 

  constructor(
    private http: HttpService,
    private router: Router
  ) { 

  }

  login(
    userName: string,
    password: string
  ) {

    let url = this.UserControllerUrl + '/authenticate';
    let authReqBody: AuthReqBody = {
      userName: userName,
      password: password
    }
    return this.http.request(HttpVerbs.POST, url, authReqBody);
  }

  setSession(token: string, username: string = "") {
    sessionStorage.setItem('id_token', token);
    sessionStorage.setItem('username', username);
    this.isLoggedIn$.next(true);
  }

  logout() {
    sessionStorage.removeItem("id_token");
    sessionStorage.removeItem("username");
    this.isLoggedIn$.next(false);
  }

  isLoggedin(): boolean {
    if(this.getToken())
      return true;
    else 
      return false
  }

  getToken() {
    return sessionStorage.getItem('id_token');
  }


  setUserDetails(userName: string) {
    let url = this.UserControllerUrl + "/GetUserByUserName/" + userName;
    this.http.request(HttpVerbs.GET, url)?.subscribe( (user: any) => {
      this.currentUser$?.next(user);
    })
  }
  // public isLoggedIn() {
  //   return moment().isBefore(this.getExpiration());
  // }

  // isLoggedOut() {
  //   return !this.isLoggedIn();
  // }

  // getExpiration() {
  //   const expiration = localStorage.getItem("expires_at");
  //   const expiresAt = JSON.parse(expiration);
  //   return moment(expiresAt);
  // }
}
interface User {
  userName: string,
  nameOfUser: string,
  userId: string,
  email: string,
  phone: string
}
interface AuthReqBody {
  userName: string,
  password: string
}

