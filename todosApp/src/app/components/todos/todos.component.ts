import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((todos:Todo[])=>{
      this.todos = todos;
    })
  }

}
