import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { StatusColorPipe } from '../../../shared/pipes/status-color-pipe';
import { TaskStatus } from '../../../core/models/task-status.enum';
import { deleteTask, updateTask } from '../../../store/actions/task.actions';
import { TaskState } from '../../../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task-card',
  imports: [StatusColorPipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  @Input() task!: Task;
  @Output() deleted = new EventEmitter<void>();
  @Output() updated = new EventEmitter<void>();

  private store = inject(Store<TaskState>);

  private updateStatus(status: TaskStatus) {
    const updatedTask = { ...this.task, status };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  moveToInProgress() {
    this.updateStatus(TaskStatus.InProgress);
  }

  markAsDone() {
    this.updateStatus(TaskStatus.Done);
  }

  deleteTask() {
    this.store.dispatch(deleteTask({ id: this.task.id, boardId: this.task.boardId }));
  }
}
