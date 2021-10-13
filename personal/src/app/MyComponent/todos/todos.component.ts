import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "First Title",
        desc: "Description",
        Active: true
      },
      {
        sno: 2,
        title: "Second Title",
        desc: "Description",
        Active: true
      }
    ]
  }


  /*   constructor() { }
  
    ngOnInit(): void {
    }
   */
}
