import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Shop from '../models/shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  // private httpClient: HttpClient;
  constructor(private httpClient: HttpClient) { 
    // this.httpClient = httpClient;
  }

  public getAllShops(): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>('https://jsonplaceholder.typicode.com/posts')
    // return this.httpClient.get<Shop>(`${environment.apiUrl}/books`);
  }
}
