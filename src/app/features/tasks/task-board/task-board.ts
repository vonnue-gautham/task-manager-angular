import { Component, OnInit, signal } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TaskStatus } from '../../../core/models/task-status.enum';

@Component({
  selector: 'app-task-board',
  imports: [TaskForm, TaskCard],
  templateUrl: './task-board.html',
  styleUrl: './task-board.css',
})
export class TaskBoard implements OnInit {
  toDoTasks = signal<Task[]>([]);
  inProgressTasks = signal<Task[]>([]);
  doneTasks = signal<Task[]>([]);

  boardId = signal<number>(1);

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) {}

  loadTasks() {
    const tasks = this.taskService.getTasksByBoard(this.boardId());
    tasks.subscribe((tasks) => {
      this.toDoTasks.set(tasks.filter((task) => task.status === TaskStatus.Todo));
      this.inProgressTasks.set(tasks.filter((task) => task.status === TaskStatus.InProgress));
      this.doneTasks.set(tasks.filter((task) => task.status === TaskStatus.Done));
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.boardId.set(parseInt(id, 10));
        this.loadTasks();
      }
    });
  }
}
