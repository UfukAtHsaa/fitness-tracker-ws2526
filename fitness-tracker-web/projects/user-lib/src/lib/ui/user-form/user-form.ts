import { Component, inject, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { User } from '../../domain/models/user';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'lib-user-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
  standalone: true
})
export class UserFormComponent implements OnChanges {
  private fb = inject(FormBuilder);

  @Input() user: User | undefined;
  @Input() buttonText: string | undefined = 'Save';
  @Input() titleText: string = 'Add new user';
  @Input() buttonVisible: boolean | undefined = true;
  @Output() save = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

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
      this.save.emit(this.form.value as User);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
