import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) { }
}
