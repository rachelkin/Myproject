import { Component, Input } from '@angular/core';
import { fakeTasks } from '../tasks/fake_tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  @Input({ required: true }) user!: any;
tasks=fakeTasks;
}
