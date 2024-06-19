import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
import * as TaskActions from '../../store/tasks/tasks.actions';
import { AppState } from '../../store/app-state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  @Output() editTaskEvent = new EventEmitter<Task>();

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(state => state.tasks.tasks);
  }

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  deleteTask(id: number): void {
    this.store.dispatch(TaskActions.deleteTask({ taskId: id }));
  }

  editTask(task: Task): void {
    this.editTaskEvent.emit(task);
  }
}
