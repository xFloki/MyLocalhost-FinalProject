import { Component, OnInit } from '@angular/core';
import { ShoplistService } from './../../../shared/services/shoplist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portion',
  templateUrl: './portion.component.html',
  styleUrls: ['./portion.component.css']
})
export class PortionComponent implements OnInit {

  shopList;
  id;

  constructor(
    private shoplistService: ShoplistService,
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       let id =  params['id'];
       this.getShopListInfo(id);
    });
  }

  getShopListInfo(id){
    this.shoplistService.showShopList(id).subscribe(
      (shoplist) =>  this.shopList = shoplist
    )
  }

}
