import { Component } from '@angular/core';
import { UserDetailComponent, UserListComponent } from '../../ui';
import { User } from '../../domain/models/user';


@Component({
  selector: 'lib-user-management',
  imports: [UserListComponent, UserDetailComponent],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
  standalone: true
})
export class UserManagementComponent {
  selectedUser: User | null = null;

  onUserSelected(user: User) {
    this.selectedUser = user;
  }
}