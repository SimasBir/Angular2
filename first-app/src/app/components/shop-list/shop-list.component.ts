import { Component, OnInit } from '@angular/core';
import { ShopsService } from 'src/app/services/shops.service';
import Shop from 'src/app/models/shop.model';


@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  public text: string = "super shop list";

  public shops: Shop[]= [
    {
      id:1,
      name:'maxima'
    },
    {
      id:2,
      name:'norfa'
    },
  {
      id:3,
      name:'lidl'
    }
  ]
  private shopService?: ShopsService;

  // constructor( private shopService: ShopsService) { //greitesne alternatyva
  constructor( shopService: ShopsService) {
    this.shopService = shopService;
   }

  ngOnInit(): void {
    this.shopService?.getAllShops().subscribe((shops)=>{
      this.shops = shops;
    });
  }

}
