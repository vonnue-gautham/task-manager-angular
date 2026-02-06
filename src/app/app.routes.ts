import { Routes } from '@angular/router';
import { BoardList } from './features/boards/board-list/board-list';
import { TaskBoard } from './features/tasks/task-board/task-board';

export const routes: Routes = [
  { path: '', component: BoardList },
  { path: 'boards/:id', component: TaskBoard },
];
