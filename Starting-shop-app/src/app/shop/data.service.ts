import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Data } from "./data.type";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Data = []

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<Data> {
    return this.httpClient.get<Data>(`${environment.shopApiUrl}/shop`);
  }

}
