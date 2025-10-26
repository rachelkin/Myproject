import { Component } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser=USERS[0];
   changeUser=()=>{
   const randomIndex = Math.floor(Math.random() * USERS.length);
   this.selectedUser=USERS[randomIndex];
  }

  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
    }
    

    }