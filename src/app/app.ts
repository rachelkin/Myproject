import { Component, signal,Output,EventEmitter  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { Tasks } from './tasks/tasks';
import { AddUser } from './user/add-user/add-user';
import { Form } from './form/form';
import { UserObj } from './user/user.model';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Header,User,Tasks,AddUser,Form],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App {
  protected readonly title = signal('firstApp');
  users = USERS;
  selectedUser?: any;
  showForm=false;
  showAdduser=false;
  @Output()  addUserToList=new EventEmitter<boolean>();

  onUserSelected(userId: string) {
    const userClicked = this.users.find(u => u.id === userId);
    if (userClicked) this.selectedUser = userClicked;
  }

  trackByUserId(index: number, user: any) {
    return user.id;
  }
  changeshowForm(){
    this.showForm=true;
  }
    changeshowAdduser(){
    this.showAdduser=true;
  }
addUser(user: UserObj) {
  this.users.push(user);
  this.users = [...this.users]; 
  this.showAdduser = false; 
}
  
}