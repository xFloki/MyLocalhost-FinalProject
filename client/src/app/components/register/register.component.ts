import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/services/user.service';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  newUser = {
    username: '',
    password: '',
    name: '',
    email: '',
    photoUrl:''
  }

  ngOnInit() {
  }

  signUp(){
    this.userService.signup(this.newUser).subscribe(
      (e) => {
        let user = new User();
        user.username = this.newUser.username;
        user.password = this.newUser.password;
        this.authService.authenticate(user).subscribe(
          (user) => {
            console.log(user);
            this.router.navigate(['/house-creator']);
          }
        )
      });
  }

}
