import { Component, OnInit } from '@angular/core';
import { ShoplistService } from './../../shared/services/shoplist.service';
import { AuthService } from './../../shared/services/auth.service';
import { HouseService } from './../../shared/services/house.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  shoplists: Array<any>=[];
  currentHouseId:string;

  constructor(
    private shoplistService: ShoplistService,
    private authService: AuthService,
    private houseService: HouseService
  ) { }

  ngOnInit() {
    this.houseService.currentUserHouse().subscribe(
      (shoplist) => {
        console.log(shoplist)
        this.currentHouseId = shoplist._id
        this.showShopLists();
      });
  }

  addNewShopList(){
    this.shoplistService.addNewShopList(this.currentHouseId).subscribe(
      (shoplist) => {
        shoplist.owner = { username: this.authService.user.username };
        this.shoplists.push(shoplist)
      }
    )
  }

  showShopLists(){
    this.shoplistService.showShopListsHouse(this.currentHouseId).subscribe(
     (shoplists) => {

       this.shoplists = shoplists }
   )
  }




}
