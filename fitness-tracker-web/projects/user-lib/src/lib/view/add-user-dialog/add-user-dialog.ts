import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { UserFormComponent } from '../../ui/user-form/user-form';
import { UserBusinessService } from '../../services/business/user-business.service';
import { User } from '../../domain/models/user';

@Component({
  selector: 'lib-add-user-dialog',
  standalone: true,
  imports: [],
  template: '',
})
export class AddUserDialogComponent {
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private userBusinessService = inject(UserBusinessService);

  constructor() {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      disableClose: true,
    });

    dialogRef.componentInstance.save.subscribe((user: User) => {
      this.userBusinessService.addUser(user).subscribe(() => {
        dialogRef.close();
      });
    });

    dialogRef.componentInstance.cancel.subscribe(() => {
      dialogRef.close();
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['.', { outlets: { dialog: null } }], { relativeTo: this.route.parent });
    });
  }
}
