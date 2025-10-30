import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../domain/models/user';

@Component({
  selector: 'lib-user-list',
  imports: [MatTableModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  standalone: true
})
export class UserList {

  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com' }
  ];

}
