import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.user = this.authService.user;
    console.log(this.user)
  }

}
