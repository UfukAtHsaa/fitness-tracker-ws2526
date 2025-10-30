import { Component } from '@angular/core';
import { UserList } from '@user-lib';

@Component({
  selector: 'app-users',
  imports: [UserList],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {

}

