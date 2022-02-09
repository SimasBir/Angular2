import { Component, OnInit } from '@angular/core';
import ShopItem from 'src/app/models/shop-item.model';
import { ShopItemsService } from 'src/app/services/shop-items.service';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss']
})
export class ShopItemsComponent implements OnInit {
  public shopItems: ShopItem[] = [];

  constructor(private shopItemService: ShopItemsService) { }

  ngOnInit(): void {
    this.shopItemService.getAllShopItems().subscribe((shopItems: ShopItem[]) => {
      this.shopItems = shopItems;
    })
  }
  deleteShopItem(id: number) {
    this.shopItems.forEach((value, index) => { if (value.id == id) this.shopItems.splice(index, 1); });
    this.shopItemService.Delete(id);
  }
}
