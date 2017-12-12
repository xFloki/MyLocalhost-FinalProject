import { Component, OnInit } from '@angular/core';
import { HouseService } from './../../shared/services/house.service';
import { UserService } from './../../shared/services/user.service';
import { AuthService } from './../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-creator',
  templateUrl: './house-creator.component.html',
  styleUrls: ['./house-creator.component.css']
})
export class HouseCreatorComponent implements OnInit {

  house = {

  }

  constructor(
    private houseService: HouseService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
  }

  createHouse(house){
    this.houseService.createHouse(house).subscribe(
      (house) => {
        this.userService.notHomeless().subscribe(
          (user) => {
            this.authService.user = user;
            this.router.navigate(['/task']);
          }
        )
      }
    )
  }
}
