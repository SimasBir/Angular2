import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CreateShop from 'src/app/models/create-shop.model';
import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {
  public name: string = '';


  constructor(private shopService: ShopsService, private router: Router,) { }

  ngOnInit(): void {

  }
  public submitNewShop():void{
    let createShop: CreateShop = {
      name: this.name
    };
    this.shopService.createShop(createShop);
    this.router.navigateByUrl("shops");
  }
}
