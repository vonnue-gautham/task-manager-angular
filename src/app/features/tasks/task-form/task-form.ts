import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../../core/models/task.model';
import { TaskStatus } from '../../../core/models/task-status.enum';
import { Store } from '@ngrx/store';
import { TaskState } from '../../../store/app.state';
import { addTask } from '../../../store/actions/task.actions';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Input() boardId!: number;
  @Output() taskAdded = new EventEmitter<void>();

  private store = inject(Store<TaskState>);

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    description: new FormControl<string>('', { nonNullable: true }),
  });

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

    this.store.dispatch(addTask({ task: newTask }));
    this.form.reset();
  }
}
