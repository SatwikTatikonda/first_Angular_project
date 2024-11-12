import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { userComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, userComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUser_id?:string;

  get selectedUser() {
      return this.users.find(user => user.id === this.selectedUser_id);
  }
  
  onSelectedUser(id:string) {
    this.selectedUser_id = id;
  }

  onAddTask(id:String){
    console.log('Add event emitted',id);
  }
}
