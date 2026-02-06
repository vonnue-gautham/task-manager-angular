import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../../core/models/task-status.enum';

const STATUS_COLORS: Record<TaskStatus, string> = {
  [TaskStatus.Todo]: '#FFFBE8',
  [TaskStatus.InProgress]: '#FFF0E0',
  [TaskStatus.Done]: '#E8F7E8',
};

@Pipe({
  name: 'statusColor',
  pure: true,
})
export class StatusColorPipe implements PipeTransform {
  transform(status: TaskStatus): string {
    return STATUS_COLORS[status];
  }
}
