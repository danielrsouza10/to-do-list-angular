import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  title: string = 'To-Do-List';
  task: string = '';

  onClickButton() {
    const container = document.querySelector('.list-group');
    const taskList = document.createElement('li');
    taskList.innerText = this.task;
    taskList.className = 'list-group-item';
    container?.appendChild(taskList);
  }

  onMouseOver(){
    
  }

  constructor() {}
}
