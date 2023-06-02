import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  title: string = 'To Do List';
  task: string = '';

  onClickButton() {
    if (this.task === '') {
      alert('digite uma tarefa');
    } else {
      const container = document.querySelector('.list-group');
      const item = document.createElement('li');
      const closeButton = document.createElement('button');
      item.innerText = this.task;
      this.task = '';
      item.className =
        'list-group-item d-flex justify-content-between align-items-center';
      closeButton.className = 'btn-close';
      closeButton.value = 'X';
      closeButton.addEventListener('click', () => {
        container?.removeChild(item);
      });
      item.appendChild(closeButton);
      container?.appendChild(item);
    }
  }

}
