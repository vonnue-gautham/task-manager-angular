import { inject, Injectable } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import * as TaskActions from '../actions/task.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of } from 'rxjs';

@Injectable()
export class TaskEffects {
  private actions$ = inject(Actions);
  private taskService = inject(TaskService);

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      switchMap(({ boardId }) =>
        this.taskService.getTasksByBoard(boardId).pipe(
          map((tasks) => TaskActions.loadTasksSuccess({ tasks })),
          catchError((err) => of(TaskActions.loadTasksFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      switchMap(({ task }) =>
        this.taskService
          .addTask(task)
          .pipe(map(() => TaskActions.loadTasks({ boardId: task.boardId }))),
      ),
    ),
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTask),
      switchMap(({ task }) =>
        this.taskService.updateTask(task).pipe(
          map(() => TaskActions.loadTasks({ boardId: task.boardId })),
          catchError((err) => of(TaskActions.loadTasksFailure({ error: err.message }))),
        ),
      ),
    ),
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      switchMap(({ id, boardId }) =>
        this.taskService.deleteTask(id).pipe(
          map(() => TaskActions.loadTasks({ boardId })),
          catchError((err) => of(TaskActions.loadTasksFailure({ error: err.message }))),
        ),
      ),
    ),
  );
}
