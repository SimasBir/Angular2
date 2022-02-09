import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import CreateShopItem from '../models/create-shop-item.model';
import ShopItem from '../models/shop-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {

  constructor(private httpClient: HttpClient) { }

  public getAllShopItems(): Observable<ShopItem[]> {
    return this.httpClient.get<ShopItem[]>(`${environment.myAPI}/ShopItem`);
  }

  public createShopItem(createShopItem: CreateShopItem):Observable<any> {
    return this.httpClient.post(`${environment.myAPI}/ShopItem`, createShopItem, { responseType: 'text' })
  }
  public Delete(id: number) {
    this.httpClient.delete(`${environment.myAPI}/ShopItem/${id}`, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }
}
