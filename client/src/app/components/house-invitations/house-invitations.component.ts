import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { HouseService } from './../../shared/services/house.service';
import { UserService } from './../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-invitations',
  templateUrl: './house-invitations.component.html',
  styleUrls: ['./house-invitations.component.css']
})
export class HouseInvitationsComponent implements OnInit {

  invitations:any;

  constructor(
    private userService: UserService,
    private houseService: HouseService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.houseService.userInvitations().subscribe(
      (invitations) => this.invitations = invitations
    )
  }

  acceptInvitation(){
    this.houseService.removeInvitations().subscribe(
      () => this.userService.notHomeless().subscribe(
        (user) => {
          this.authService.user = user;
          this.router.navigate(['/task']);
        }
      )
    )
  }

}
