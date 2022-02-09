import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CreateShopItem from 'src/app/models/create-shop-item.model';
import Shop from 'src/app/models/shop.model';
import { ShopItemsService } from 'src/app/services/shop-items.service';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-create-shop-item',
  templateUrl: './create-shop-item.component.html',
  styleUrls: ['./create-shop-item.component.scss']
})
export class CreateShopItemComponent implements OnInit {
  public name: string = '';
  public price: number = 0.00;
  public shopId: number = 0;
  public shops: Shop[] = [];

  constructor(private shopItemService: ShopItemsService, private router: Router,
    private shopService: ShopsService) { }

  ngOnInit(): void {
    this.shopService.getAllShops().subscribe((shops: Shop[]) => {
      this.shops = shops;
    })
  }
  public submitNewShopItem():void{
    let createShopItem: CreateShopItem = {
      name: this.name,
      price: this.price,
      shopId: this.shopId,
    };
    this.shopItemService.createShopItem(createShopItem).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("shop-items");
    });;
  }
}
