import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../services/task.service';
import * as TaskActions from './tasks.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TaskEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.loadTasks),
    mergeMap(() => this.taskService.getTasks().pipe(
      map(tasks => TaskActions.loadTasksSuccess({ tasks })),
      catchError(() => of({ type: '[Task List] Load Tasks Failure' }))
    ))
  ));

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
