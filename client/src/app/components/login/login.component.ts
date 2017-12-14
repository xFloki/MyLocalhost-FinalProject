import { AuthService } from './../../shared/services/auth.service';
import { print } from 'util';
import { User } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmitLogin(loginForm) {
    this.authService.authenticate(this.user).subscribe(
      (user) => {
        loginForm.reset();
        console.log('NOOO')
        console.log(this.authService.user);
        user.homeless ? this.router.navigate(['/house-creator']) : this.router.navigate(['/task']);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

}
