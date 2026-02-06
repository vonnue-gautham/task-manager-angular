import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Board } from '../../../core/models/board.model';
import { BoardService } from '../../../core/services/board.service';

@Component({
  selector: 'app-board-list',
  imports: [RouterLink],
  templateUrl: './board-list.html',
  styleUrl: './board-list.css',
})
export class BoardList implements OnInit {
  boards = signal<Board[]>([]);

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getBoards().subscribe({
      next: (boards) => {
        this.boards.set(boards);
      },
      error: (error) => {
        console.error('Failed to load boards: ', error);
      },
    });
  }
}
