import { Component } from '@angular/core';
import { UserManagementComponent } from '@user-lib';

@Component({
  selector: 'app-users',
  imports: [UserManagementComponent],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {

}

