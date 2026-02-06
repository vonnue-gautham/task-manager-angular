import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { StatusColorPipe } from '../../../shared/pipes/status-color-pipe';
import { TaskStatus } from '../../../core/models/task-status.enum';

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

  constructor(private taskService: TaskService) {}

  private updateStatus(status: TaskStatus) {
    const updatedTask = { ...this.task, status };

    this.taskService.updateTask(updatedTask).subscribe({
      next: () => this.updated.emit(),
      error: (error) => console.error('Update error: ', error),
    });
  }

  moveToInProgress() {
    this.updateStatus(TaskStatus.InProgress);
  }

  markAsDone() {
    this.updateStatus(TaskStatus.Done);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id).subscribe({
      next: () => this.deleted.emit(),
      error: (err) => console.error('Delete error:', err),
    });
  }
}
