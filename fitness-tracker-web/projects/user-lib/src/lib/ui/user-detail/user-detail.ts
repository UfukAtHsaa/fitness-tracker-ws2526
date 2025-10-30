import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../domain/models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-user-detail',
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
  standalone: true
})
export class UserDetailComponent {
  @Input() user: User | null = null;
}
