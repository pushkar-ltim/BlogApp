import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isLoggedIn$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoggedIn$ = authService.isLoggedIn$;
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }

  routeToProfile() {
    this.router.navigate(['/blog-app/profile']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
