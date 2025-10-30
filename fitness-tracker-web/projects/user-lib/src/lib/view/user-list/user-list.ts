import { Component, EventEmitter, Output, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../domain/models/user';
import { UserBusinessService } from '../../services/business/user-business.service';

@Component({
  selector: 'lib-user-list',
  imports: [MatTableModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  standalone: true
})
export class UserListComponent implements OnInit {
  @Output() userSelected = new EventEmitter<User>();

  private userBusinessService = inject(UserBusinessService)

  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: User[] = [];

  ngOnInit(): void {
    this.userBusinessService.getAllUsers().subscribe(users => {
      this.dataSource = users;
    });
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }
}
