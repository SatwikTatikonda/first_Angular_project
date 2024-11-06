import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { userComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, userComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users= DUMMY_USERS;
}
