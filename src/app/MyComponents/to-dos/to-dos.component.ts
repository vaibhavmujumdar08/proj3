import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent {
todos : Todo[];
constructor()
{
  this.todos=[
    {
    sno:1,
    title:"This is title",
    desc : "Description",
    active : true
  },
  {sno:2,
    title:"This is title2",
    desc : "Description",
    active : true
  },
  {sno:3,
    title:"This is title3",
    desc : "Description",
    active : true
  }
];
}
deleteTodo(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index ,1);
}
}
