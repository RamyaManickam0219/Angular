import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../models/task.model';
import * as TaskActions from '../../store/tasks/tasks.actions';
import { AppState } from '../../store/app-state';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() taskToEdit: Task | null = null;
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.task = { ...this.taskToEdit };
    }
  }

  onSubmit(): void {
    if (this.task.id === 0) {
      this.task.id = new Date().getTime();
      this.store.dispatch(TaskActions.addTask({ task: this.task }));
    } else {
      this.store.dispatch(TaskActions.updateTask({ task: this.task }));
    }
    this.resetForm();
  }

  resetForm(): void {
    this.task = { id: 0, title: '', description: '', completed: false };
  }
}
