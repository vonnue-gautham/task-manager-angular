import { Component, inject, OnInit } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskCard } from '../task-card/task-card';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { loadTasks } from '../../../store/actions/task.actions';
import {
  selectDoneTasks,
  selectInProgressTasks,
  selectTodoTasks,
} from '../../../store/selectors/task.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task-board',
  imports: [TaskForm, TaskCard, AsyncPipe],
  templateUrl: './task-board.html',
  styleUrl: './task-board.css',
})
export class TaskBoard implements OnInit {
  private store = inject(Store<AppState>);
  private route = inject(ActivatedRoute);

  toDoTasks$ = this.store.select(selectTodoTasks);
  inProgressTasks$ = this.store.select(selectInProgressTasks);
  doneTasks$ = this.store.select(selectDoneTasks);

  boardId!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const boardId = Number(params.get('id'));
      if (boardId) {
        this.boardId = boardId;
        this.store.dispatch(loadTasks({ boardId }));
      }
    });
  }
}
