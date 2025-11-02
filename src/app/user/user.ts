import { Component, Input } from '@angular/core';
import { USERS} from '../fake_users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  selectedUser= USERS[0];
  @Input() name!: string;
  @Input() avatar!: string;
  
  get  userImgPath(){
    return 'assets/users/' + this.avatar;
  }
  changeUser(){
    const randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser =USERS[randomIndex];
  }
}
