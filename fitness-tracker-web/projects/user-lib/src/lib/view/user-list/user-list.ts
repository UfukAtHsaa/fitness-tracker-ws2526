import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../domain/models/user';
import { UserBusinessService } from '../../services/business/user-business.service';

export enum UserListClickAction {
  EmitEvent = 'emitEvent',
  Navigate = 'navigate'
}

@Component({
  selector: 'lib-user-list',
  imports: [MatTableModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserListComponent implements OnInit {
  @Output() userSelected = new EventEmitter<User>();
  @Input() clickActionType: UserListClickAction = UserListClickAction.Navigate;

  private userBusinessService = inject(UserBusinessService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: User[] = [];
  routerOutletEnabled: boolean = false;

  ngOnInit(): void {
    this.loadUsers();
    this.userBusinessService.createdUser$.subscribe((newUser) => {
      this.dataSource = [...this.dataSource, newUser];
    });
  }

  loadUsers(): void {
    this.routerOutletEnabled = false;
    this.userBusinessService.getAllUsers().subscribe(users => {
      this.dataSource = users;
    });
  }

  selectUser(user: User) {
    if (this.clickActionType === UserListClickAction.EmitEvent) {
      this.userSelected.emit(user);
    } else if (this.clickActionType === UserListClickAction.Navigate) {
      this.routerOutletEnabled = true;
      this.router.navigate(['./', user.id], { relativeTo: this.activatedRoute });
    }
  }
}
