import { Component, OnInit } from '@angular/core';
import Shop from 'src/app/models/shop.model';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  public shops: Shop[] = [];
  public shop?: Shop

  constructor(private shopService: ShopsService) { }

  ngOnInit(): void {

    this.shopService.getAllShops().subscribe((shops: Shop[]) => {
      this.shops = shops;
    })
  }
  deleteShop(id: number) {
    this.shops.forEach((value, index) => { if (value.id == id) this.shops.splice(index, 1); });
    this.shopService.Delete(id);
  }
}
