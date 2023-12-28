import { Injectable } from '@angular/core';
import { HttpService, HttpVerbs } from '../http/http.service';

@Injectable()
export class AuthService {

  UserControllerUrl = 'User'

  constructor(
    private http: HttpService
  ) { }

  login(
    userName: string,
    password: string
  ) {
    let url = this.UserControllerUrl + '/authenticate';
    let authReqBody: AuthReqBody = {
      userName : userName,
      password: password
    }
    return this.http.request(HttpVerbs.POST, url, authReqBody)
  }
}

interface AuthReqBody {
  userName: string,
  password: string
}

