import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserFormComponent } from '../../ui/user-form/user-form';
import { UserBusinessService } from '../../services/business/user-business.service';
import { User } from '../../domain/models/user';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-add-user-dialog',
  standalone: true,
  imports: [RouterModule, UserFormComponent, MatDialogModule, MatButtonModule],
  templateUrl: './add-user-dialog.html',
  styleUrl: './add-user-dialog.scss',
})
export class AddUserDialogComponent {
  private userBusinessService = inject(UserBusinessService);
  private router = inject(Router);

  onSave(user: User) {
    this.userBusinessService.addUser(user).subscribe(() => {
      this.onClose();
    });
  }

  onClose() {
    this.router.navigate(['.', { outlets: { dialog: null } }]);
  }
}
