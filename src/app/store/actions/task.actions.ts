import { createAction, props } from '@ngrx/store';
import { Task } from '../../core/models/task.model';

export const loadTasks = createAction('[Task] Load Tasks', props<{ boardId: number }>());

export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>(),
);

export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: string }>(),
);

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());

export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());

export const deleteTask = createAction('[Task] Delete Task', props<{ id: number; boardId: number }>());
