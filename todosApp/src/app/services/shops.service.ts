import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import CreateShop from '../models/create-shop.model';
import Shop from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private httpClient: HttpClient) { }

  public getAllShops(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(`${environment.myAPI}/Shop`);
  }
  public getById(id: number): Observable<Shop>{
    return this.httpClient.get<Shop>(`${environment.myAPI}/Shop/${id}`);
  }
  public Delete(id: number) {
    this.httpClient.delete(`${environment.myAPI}/Shop/${id}`, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }
  public createShop(createShop: CreateShop) {
    this.httpClient.post(`${environment.myAPI}/Shop`, createShop, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }
  public updateShop(id:number, createShop: CreateShop):Observable<any>{
    return this.httpClient.put(`${environment.myAPI}/Shop/${id}`,createShop)
  }
}