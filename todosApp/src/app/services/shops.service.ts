import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Shop from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private httpClient: HttpClient) { }

  public getAllShops(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(`${environment.myAPI}/Shop`);
  }
  public Delete(id: number) {
    // fetch(`${environment.myAPI}/Shop/${id}`, {
    //   method: 'DELETE',});
    this.httpClient.request('delete', `${environment.myAPI}/Shop/${id}`).subscribe(data => {
      console.log(data);
    });
  }
}
