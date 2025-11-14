import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfile } from './user-profile';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserBusinessService } from '../../services/business/user-business.service';
import { User } from '../../domain/models/user';
import { UserForm } from '../../ui/user-form/user-form';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserProfile', () => {
  let component: UserProfile;
  let fixture: ComponentFixture<UserProfile>;
  let mockUserBusinessService: Partial<UserBusinessService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  const mockUser: User = {
    id: '1',
    name: 'Test User',
    email: 'test@example.com',
    password: 'password',
  };

  beforeEach(async () => {
    mockUserBusinessService = {
      getUserById: (id: string) => of(mockUser),
    };

    mockActivatedRoute = {
      paramMap: of({
        get: (key: string) => {
          if (key === 'id') {
            return '1';
          }
          return null;
        },
      } as any),
    };

    await TestBed.configureTestingModule({
      imports: [UserProfile, ReactiveFormsModule, UserForm],
      providers: [
        { provide: UserBusinessService, useValue: mockUserBusinessService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve user ID from route parameters', () => {
    expect(component.userId).toBe('1');
  });

  it('should fetch user data based on ID', () => {
    expect(component.user).toEqual(mockUser);
  });
});