import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../domain/models/user';
import { UserBusinessService } from '../../services/business/user-business.service';
import { UserFormComponent } from '../../ui/user-form/user-form';

@Component({
  selector: 'lib-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, UserFormComponent, MatButtonModule, MatIconModule],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.scss'],
})
export class UserProfileComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private userBusinessService = inject(UserBusinessService);
  private location = inject(Location);

  userId: string | null = null;
  user: User | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        this.userBusinessService.getUserById(this.userId).subscribe((user: User) => {
          this.user = user;
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}