import { Component, Input, Output , EventEmitter ,OnInit} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  ngOnInit(): void {}
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todo> = new EventEmitter();

  // @Output() todoDelete: EventEmitter<Todo>=new EventEmitter();
  constructor() { }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has beed triggered") 
  }
  onCheckboxClick(todo:Todo){
    this.todocheckbox.emit(todo);
    console.log("onClick has beed triggered") 
  }
}
