import { Task } from '../core/models/task.model';

export interface TaskState {
  tasks: Task[];
  loading: boolean;
}

export interface AppState {
  tasks: TaskState;
}
