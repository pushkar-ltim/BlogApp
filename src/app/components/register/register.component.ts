import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService, HttpVerbs } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    nameOfUser: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl(''),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required)
  })

  constructor(
    private router:Router,
    private httpService: HttpService,
  ) {
  }

  onSubmit() {
    let user = {
      nameOfTheUser: this.form.value.nameOfUser,
      email: this.form.value.email,
      username: this.form.value.userName,
      phone: this.form.value.phone,
      password: this.form.value.password,
      passwordConfirmation: this.form.value.passwordConfirmation,
    }

    if(user.password !== user.passwordConfirmation) {
      console.error("passwords do not match");
      this.form.reset();
      return;
    }

    let url = 'User/CreateUser';

    this.httpService.request(HttpVerbs.POST, url, user)?.subscribe(res => {
      this.routeToLogin();
    });
  }

  routeToLogin() {
    this.router.navigate(['/login'])
  }
  
}
