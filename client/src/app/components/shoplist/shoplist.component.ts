import { Component, OnInit } from '@angular/core';
import { ShoplistService } from './../../shared/services/shoplist.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  constructor(
    private shoplistService: ShoplistService
  ) { }

  ngOnInit() {
  }

}
