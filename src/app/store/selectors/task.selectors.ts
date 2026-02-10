import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../app.state';
import { TaskStatus } from '../../core/models/task-status.enum';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTasks = createSelector(selectTaskState, (state) => state.tasks);

export const selectTodoTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((t) => t.status === TaskStatus.Todo),
);

export const selectInProgressTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((t) => t.status === TaskStatus.InProgress),
);

export const selectDoneTasks = createSelector(selectTasks, (tasks) =>
  tasks.filter((t) => t.status === TaskStatus.Done),
);
