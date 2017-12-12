import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('8=====D')
    //this.user = this.authService.user;
    //this.authService.loginEvent.subscribe(user => this.user = user)
    console.log('///')
  }

}
