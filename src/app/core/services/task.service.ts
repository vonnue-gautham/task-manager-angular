import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  private getTaskUrl(id?: number): string {
    return id ? `${this.apiUrl}/${id}` : this.apiUrl;
  }

  getTasksByBoard(boardId: number): Observable<Task[]> {
    const params = { boardId: boardId.toString() };

    return this.http.get<Task[]>(this.getTaskUrl(), { params });
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.getTaskUrl(), task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.getTaskUrl(task.id), task);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(this.getTaskUrl(id));
  }
}
