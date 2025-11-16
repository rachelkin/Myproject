import { Component, Input } from '@angular/core';
import { fakeTasks } from '../tasks/fake_tasks';
import { UserObj } from '../user/user.model';
import { Task } from '../tasks/task/task';  
import { NewTask } from './new-task/new-task';
export type TaskObj = {
  id: string;
  userId: string;
  title: string;
};
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  @Input() user!: UserObj; 
 fakeTasks: TaskObj[] = fakeTasks; 
   AskShowing=false;
  

  get userSelectedTasks(): TaskObj[] {
    if (!this.user) return [];
    return this.fakeTasks.filter(task => task.userId === this.user.id);
  }

  trackById(index: number, task: TaskObj) {
    return task.id;
  }
  showNew(){
    this.AskShowing=true;
  }
  
  
}
