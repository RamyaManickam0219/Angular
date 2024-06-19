import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  selectedTask: Task | null = null;

  onEditTask(task: Task): void {
    this.selectedTask = task;
  }
}
