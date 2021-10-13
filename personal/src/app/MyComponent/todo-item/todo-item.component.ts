import { Component, Input, OnInit } from '@angular/core';

import { Todo } from 'src/app/Todo/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;
  constructor(todo:Todo) {this.todo=todo}

  ngOnInit(): void {
  }

}
