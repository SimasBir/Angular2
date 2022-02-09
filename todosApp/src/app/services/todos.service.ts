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
    return this.httpClient.get<Todo[]>(`${environment.jsonPlaceholderAPI}/todos/?_limit=10`); //?_limit=10
  } 
  public Delete(id: number){
    this.httpClient.delete(`${environment.jsonPlaceholderAPI}/todos/${id}`);
  }
}
