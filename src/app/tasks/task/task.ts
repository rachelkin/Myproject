import { Component, Input } from '@angular/core';
import { TaskObj } from '../tasks'; 

@Component({
  selector: 'app-task',
  standalone: true,
  template: `<p>{{ task.title }}</p>`,
  styleUrls: ['./task.css']
})
export class Task {
  @Input() task!: TaskObj;
}
