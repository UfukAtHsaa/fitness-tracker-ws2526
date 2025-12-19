import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, switchMap, of } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    take(1), // Take the first emitted value
    switchMap(user => {
      if (user && authService.hasRole('ROLE_ADMIN')) {
        return of(true);
      } else {
        router.navigate(['/']); // Redirect to home if not admin or not logged in
        return of(false);
      }
    })
  );
};
