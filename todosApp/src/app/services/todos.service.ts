import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Todo from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  public getAll():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${environment.jsonPlaceholderAPI}/todos`);
  }
}
