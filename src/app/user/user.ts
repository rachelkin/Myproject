import { Component, input, Input, Output, EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';
export type UserObj = {
  id: string;
  name: string;
  avatar: string;
  };

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [User],
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  selectedUser = USERS[0];

  @Input({ required: true }) userObj!: UserObj;

  @Input({ required: true })isSelected!:boolean
  
  @Output() userClicked = new EventEmitter<string>();

  constructor(){
    console.log('name', this.userObj?.name);
    
  }



  onUserClicked() {
    this.userClicked.emit(this.userObj.id);
  }
    

  get userImgPath() {
    return 'assets/users/' + this.userObj.avatar;
  }
  
  changeUser() {
    const randomlndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomlndex];
  }
}
