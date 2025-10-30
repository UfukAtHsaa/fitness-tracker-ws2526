import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { UserFormComponent } from '../../ui/user-form/user-form';

@Component({
  selector: 'lib-add-user-dialog',
  standalone: true,
  imports: [RouterModule, MatDialogModule],
  templateUrl: './add-user-dialog.html',
  styleUrl: './add-user-dialog.scss',
})
export class AddUserDialogComponent {
  private dialog = inject(MatDialog);
  private router = inject(Router);

  constructor() {
    this.dialog.open(UserFormComponent, {
      width: '400px',
      disableClose: true,
    }).afterClosed().subscribe(() => {
      this.router.navigate(['../'], { relativeTo: this.router.routerState.root });
    });
  }
}
