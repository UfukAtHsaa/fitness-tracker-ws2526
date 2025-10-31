import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../domain/models/user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-user-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
  standalone: true
})
export class UserFormComponent implements OnChanges {
  private fb = inject(FormBuilder);

  @Input() user: User | undefined;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user) {
      this.form.patchValue({
        name: this.user.name,
        email: this.user.email,
      });
    }
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
