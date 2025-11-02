import { Component, Input,Output, EventEmitter } from '@angular/core';
import { USERS} from '../fake_users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  @Input() name!: string;
  @Input() avatar!: string;
  @Input({ required: true }) id!: string;
  @Output() userclicked = new EventEmitter<string>();  // Use string for id type
  selectedUser: any;
  onuserclicked() {
    this.userclicked.emit(this.id);
  }

  get userImgPath() {
    return 'assets/users/' + this.avatar;
  }

  changeUser() {
    const randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomIndex];
  }
}