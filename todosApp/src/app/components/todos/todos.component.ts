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

  constructor(private todoService: TodosService) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((todos: Todo[]) => {
      this.todos = todos;
    })
  }
  deleteTodo(id: number) {
    this.todos.forEach((value, index) => { if (value.id == id) this.todos.splice(index, 1); });
    this.todoService.Delete(id)

//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//   method: 'DELETE',
// });
  }
}
