import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopsService } from 'src/app/services/shops.service';
import CreateShop from 'src/app/models/create-shop.model';
import Shop from 'src/app/models/shop.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-shop',
  templateUrl: './update-shop.component.html',
  styleUrls: ['./update-shop.component.scss']
})
export class UpdateShopComponent implements OnInit {
  public name: string = '';
  public shop?: Shop;
  private routeSub?: Subscription;

  constructor(private shopService: ShopsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object // kept it here as a comment for later
      console.log(params['id']) //log the value of id
      this.shopService.getById(params['id']).subscribe((shop: Shop) => {
        this.shop = shop;
      })
    });
  }
  updateShop(id:number): void {
    let createShop: CreateShop = {
      name: this.name
    };
    this.shopService.updateShop(id,createShop).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("shops");
    });;
  }
}
