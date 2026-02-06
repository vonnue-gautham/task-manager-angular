import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { TaskStatus } from '../../../core/models/task-status.enum';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Input() boardId!: number;
  @Output() taskAdded = new EventEmitter<void>();

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl<string>('', { nonNullable: true }),
  });

  constructor(private taskService: TaskService) {}

  createTask(title: string, description: string): Task {
    return {
      id: Date.now(),
      title,
      description,
      status: TaskStatus.Todo,
      boardId: this.boardId,
    };
  }

  submit() {
    if (this.form.invalid) return;

    const { title, description } = this.form.getRawValue();

    const newTask = this.createTask(title, description);

    this.taskService.addTask(newTask).subscribe(() => {
      this.taskAdded.emit();
      this.form.reset();
    });
  }
}
