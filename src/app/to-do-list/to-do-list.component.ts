import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  title: string = 'To-Do-List';
  task: string = '';

  onClickButton(){
    alert('you click me')
  }

  constructor(){

  }

}
