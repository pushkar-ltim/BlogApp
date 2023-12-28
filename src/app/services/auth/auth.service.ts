import { Injectable } from '@angular/core';
import { HttpService, HttpVerbs } from '../http/http.service';

@Injectable()
export class AuthService {

  UserControllerUrl = '/User'

  constructor(
    private http: HttpService
  ) { }

  login(
    userName: string,
    password: string
  ) {
    let url = this.UserControllerUrl + '/authenticate';
    let authReqBody: AuthReqBody = {
      userName: userName,
      password: password
    }
    return this.http.request(HttpVerbs.POST, url, authReqBody)
  }

  // private setSession(authResult) {
  //   localStorage.setItem('id_token', authResult.idToken);
  // }

  // logout() {
  //   localStorage.removeItem("id_token");
  // }

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

interface AuthReqBody {
  userName: string,
  password: string
}

