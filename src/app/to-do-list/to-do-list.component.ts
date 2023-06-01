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
    const closeButton = document.createElement('button');
    taskList.innerText = this.task;
    taskList.className = 'list-group-item';
    closeButton.innerText = 'X';
    closeButton.className = 'btn btn-danger';
    closeButton.value = 'X';
    closeButton.addEventListener('click', () => {
      container?.removeChild(taskList);
    });
    taskList.append(closeButton);
    container?.appendChild(taskList);
  }
  

  onMouseOver() {}

  constructor() {}
}
