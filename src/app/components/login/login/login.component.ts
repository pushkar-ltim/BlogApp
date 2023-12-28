import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  routeToRegister() {
    this.router.navigate(['/register'])
  }

  onSubmit() {

    const val = this.form.value;
    let username = val.username;
    let password = val.password;

    // if (val.email && val.password) {
    //   this.authService.login(val.email, val.password)
    //     .subscribe(
    //       () => {
    //         console.log("User is logged in");
    //         this.router.navigateByUrl('/');
    //       }
    //     );
    // }

    this.authService.login(username, password)?.subscribe(res => {
      console.log(res, 'login result');
      
    })
    
  }

}
