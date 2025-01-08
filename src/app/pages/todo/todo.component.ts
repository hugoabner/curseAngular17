import { NTodo } from './../../models/todo.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';


/*decorador de component*/
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  /***@Input => */
  /*         => es un decorador de angular que sirve para
  /*            pasar datos de un componente padre a un
  /*            componente hijo. (Permite que un componente
  /*            hijo reciba datos de un componente que lo
  /*            contiene)

  /*creamos una */
  @Input({ required: true }) todoData?: NTodo.TodoData;

    /***@Output => */
  /*         => es un decorador de angular que sirve para
  /*            pasar datos de un componente padre a un
  /*            componente hijo. (Permite que un componente
  /*            hijo reciba datos de un componente que lo
  /*            contiene)

  /*creamos una */
  @Output() onClickIcon = new EventEmitter<boolean>();



}
