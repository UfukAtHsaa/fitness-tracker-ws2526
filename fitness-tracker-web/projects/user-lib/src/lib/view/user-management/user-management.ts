import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { User } from '../../domain/models/user';
import { UserListComponent } from '../user-list/user-list';
import { UserDetailComponent } from '../../ui/user-detail/user-detail';



@Component({
  selector: 'lib-user-management',
  imports: [UserListComponent, UserDetailComponent, MatButtonModule, MatIconModule, RouterModule],
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