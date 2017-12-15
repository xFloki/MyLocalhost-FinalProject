import { Component, OnInit } from '@angular/core';
import { ShoplistService } from './../../../shared/services/shoplist.service';
import { AuthService } from './../../../shared/services/auth.service';
import { DebtService } from './../../../shared/services/debt.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portion',
  templateUrl: './portion.component.html',
  styleUrls: ['./portion.component.css']
})
export class PortionComponent implements OnInit {

  shopList;
  id: string;
  products;
  shopListPortionIdLogged;
  product = ""

  constructor(
    private shoplistService: ShoplistService,
    private debtService: DebtService,
    private route: ActivatedRoute,
    private authService: AuthService
   ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id =  params['id'];
       this.getShopListInfo(this.id);
    });
  }

  getShopListInfo(id){
    this.shoplistService.showShopList(id).subscribe(
      (shoplist) =>  {
        this.shopList = shoplist
        console.log(shoplist)
      }
    )
  }

  searchProduct(){
    this.shoplistService.findProduct(this.product).subscribe(
      (products) => {
        this.products = products;
      }
    )
  }

  addToPortion(prod){
    let hasPortion = -1;
    this.shopList.products.forEach((e,i) => {
      if(e.owner.id == this.authService.user.id) hasPortion = i;
    })
    if(hasPortion !== -1){
      prod.totalPrice =
      this.shopList.products[hasPortion].totalPrice += parseInt(prod.price.replace(/,/g,"."));
      this.shopList.products[hasPortion].products.push([prod.name, prod.price]);
      this.shoplistService
      .updatePortion(this.shopList.products[hasPortion]._id, prod)
      .subscribe(
        (e)=> console.log('FINITO')
      )
    } else {
      this.shoplistService
      .createPortion(this.shopList._id, prod).subscribe(
        () => this.getShopListInfo(this.id)
      );

    }
    this.products = '';
    this.product = '';
  }

  acceptPortion(owner,portion){
    this.shoplistService.acceptPortion(portion._id).subscribe(
      ()=> {
        console.log(portion);
        let debt = {
          debtor: portion.owner.id,
          quantity: portion.totalPrice,
          reason: 'ShopList day ' + new Date() + 'created by ' + owner.username
        }
        this.debtService.create(debt).subscribe();
        this.getShopListInfo(this.id);
      }
    )
  }

  cancelPortion(portionId){
    this.shoplistService.cancelPortion(portionId).subscribe(
      () => this.getShopListInfo(this.shopList._id)
    )
  }

}
