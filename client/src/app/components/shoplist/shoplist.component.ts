import { Component, OnInit } from '@angular/core';
import { ShoplistService } from './../../shared/services/shoplist.service';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  shoplists: Array<any>=[];

  constructor(
    private shoplistService: ShoplistService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.showShopLists();
  }

  addNewShopList(){
    this.shoplistService.addNewShopList().subscribe(
      (shoplist) => {
        shoplist.owner = { username: this.authService.user.username };
        this.shoplists.push(shoplist)
      }
    )
  }

  showShopLists(){
    this.shoplistService.showShopLists().subscribe(
      (shoplists) => this.shoplists = shoplists
    )
  }




}
